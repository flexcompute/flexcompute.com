# frozen_string_literal: true

module Jekyll
  module Archives
    class Archive < Jekyll::Page
      attr_accessor :posts, :type, :slug

      # Attributes for Liquid templates
      ATTRIBUTES_FOR_LIQUID = %w(
        posts
        type
        title
        date
        name
        path
        url
        permalink
      ).freeze

      # Initialize a new Archive page
      #
      # site  - The Site object.
      # title - The name of the tag/category or a Hash of the year/month/day in case of date.
      #           e.g. { :year => 2014, :month => 08 } or "my-category" or "my-tag".
      # type  - The type of archive. Can be one of "year", "month", "day", "category", or "tag"
      # posts - The array of posts that belong in this archive.
      def initialize(site, title, type, posts, seo_title="",seo_description="", seo_image={}, ext={})
        @site   = site
        @posts  = posts
        @type   = type
        @page_title = title
        @title  = seo_title
        @description  = seo_description
        @image  = {
            "path" => seo_image['image'],
            "alt" => (seo_image['alt'].nil? || seo_image['alt'].empty?) ? @title : seo_image['alt']
        }
        @config = site.config["jekyll-archives"]
        @slug   = slugify_string_title

        # Use ".html" for file extension and url for path
        @ext  = File.extname(relative_path)
        @path = relative_path
        @name = File.basename(relative_path, @ext)

        sitemap_field = :sitemap
        noindex_field = :noindex
        @sitemap = ext.has_key?(sitemap_field) ? ext[sitemap_field] : true
        @noindex = ext.has_key?(noindex_field) ? ext[noindex_field] : false

        @data = {
          "layout" => layout,
          "page_title" => title,
          "description" => seo_description,
          "image" => @image,
          "sitemap" => @sitemap,
          "noindex" => @noindex
        }
        @content = ""
      end

      # The template of the permalink.
      #
      # Returns the template String.
      def template
        @config.dig("permalinks", type)
      end

      # The layout to use for rendering
      #
      # Returns the layout as a String
      def layout
        @config.dig("layouts", type) || @config["layout"]
      end

      # Returns a hash of URL placeholder names (as symbols) mapping to the
      # desired placeholder replacements. For details see "url.rb".
      def url_placeholders
        if @page_title.is_a? Hash
          @page_title.merge(:type => @type)
        else
          {:name => @slug, :type => @type }
        end
      end

      # The generated relative url of this page. e.g. /about.html.
      #
      # Returns the String url.
      def url
        @url ||= URL.new(
          :template     => template,
          :placeholders => url_placeholders,
          :permalink    => nil
        ).to_s
      rescue ArgumentError
        raise ArgumentError, "Template \"#{template}\" provided is invalid."
      end

      def permalink
        data&.is_a?(Hash) && data["permalink"]
      end

      # Produce a title object suitable for Liquid based on type of archive.
      #
      # Returns a String (for tag and category archives) and nil for
      # date-based archives.
      def url_title
        @page_title if @page_title.is_a? String
      end

      def title
        @title if @title.is_a? String
      end

      # Produce a date object if a date-based archive
      #
      # Returns a Date.
      def date
        return unless @title.is_a?(Hash)

        @date ||= begin
          args = @title.values.map(&:to_i)
          Date.new(*args)
        end
      end

      # Obtain the write path relative to the destination directory
      #
      # Returns the destination relative path String.
      def relative_path
        @relative_path ||= begin
          path = URL.unescape_path(url).gsub(%r!^/!, "")
          path = File.join(path, "index.html") if url.end_with?("/")
          path
        end
      end

      # Returns the object as a debug String.
      def inspect
        "#<Jekyll:Archive @type=#{@type} @title=#{@title} @data=#{@data.inspect}>"
      end

      private

      # Generate slug if @title attribute is a string.
      #
      # Note: mode other than those expected by Jekyll returns the given string after
      # downcasing it.
      def slugify_string_title
        return unless url_title.is_a?(String)

        Utils.slugify(url_title, :mode => @config["slug_mode"])
      end
    end
  end
end
