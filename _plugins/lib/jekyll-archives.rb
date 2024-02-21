# frozen_string_literal: true

require "jekyll"
require 'yaml'

module Jekyll
  module Archives
    # Internal requires
    autoload :Archive, "jekyll-archives/archive"
    autoload :VERSION, "jekyll-archives/version"

    class Archives < Jekyll::Generator
      safe true

      ARCHIVES_DEFAULTS = {
        "layout"     => "archive",
        "enabled"    => [],
        "permalinks" => {
          "year"     => "/:year/",
          "month"    => "/:year/:month/",
          "day"      => "/:year/:month/:day/",
          "tag"      => "/tag/:name/",
          "category" => "/category/:name/",
          "author" => "/author/:name/",
        },
      }.freeze

      def initialize(config = {})
        archives_config = config.fetch("jekyll-archives", {})
        if archives_config.is_a?(Hash)
          @config = Utils.deep_merge_hashes(ARCHIVES_DEFAULTS, archives_config)
        else
          @config = nil
          Jekyll.logger.warn "Archives:", "Expected a hash but got #{archives_config.inspect}"
          Jekyll.logger.warn "", "Archives will not be generated for this site."
        end
        @enabled = @config && @config["enabled"]
      end

      def generate(site)
        return if @config.nil?

        @site = site
        @posts = site.posts
        @archives = []

        @site.config["jekyll-archives"] = @config

        read
        @site.pages.concat(@archives)

        @site.config["archives"] = @archives
      end

      # Get 'seo title/description tag' from the title_map file
      #
      # Returns the seo title tag String
      def get_seo_info(title, type='tags')
        if seo_config.nil?
            return ""
        end
        title_key = title.downcase
        data_source = !seo_config[type] ? [] : seo_config[type]
        filtered_data = data_source.select { |item| item['name'].downcase == title_key }.first
        seo_info = !filtered_data ? "" : filtered_data
        return seo_info
      end

      def get_default_title(title)
        if seo_config.nil? || !seo_config['default_config']['title']
            return "Simulation Blog | #{title} | Flexcompute"
        end
        return seo_config['default_config']['title'].gsub("${tag|author|category}", title)
      end

      def get_default_description()
        if seo_config.nil? || !seo_config['default_config']['description']
            return "Flexcompute: Pioneering swift solvers for Fluid Dynamics &amp; #{title} Electromagnetic simulations."
        end
        return seo_config['default_config']['description']
      end

      def get_default_feature_image()
        feature_image_config = seo_config['default_config']['feature_image']
        if feature_image_config['image'].nil? || feature_image_config['image'].empty?
          return {
            "image" => "/assets/images/default-feature-image.png"
          }
        else
          return feature_image_config
        end
      end

      # Read archive data from posts
      def read
        seo_config
        read_tags
        read_categories
        read_dates
        read_authors
      end

      def read_tags
        if enabled? "tags"
          category_list = categories.keys.map { |str| str.downcase }
          author_list = authors.keys.map { |str| str.downcase }
          check_list = [*category_list, *author_list]
          tags.each do |title, posts|
            seo_info = get_seo_info(title, 'tags')
            seo_title = !seo_info['title'] ? get_default_title(title) : seo_info['title']
            seo_description = !seo_info['description'] ? get_default_description() : seo_info['description']
            seo_image = !seo_info['feature_image'] ? get_default_feature_image() : seo_info['feature_image']
            if check_list.include?(title.downcase)
              # duplicate, sitemap: false, noindex: false
              @archives << Archive.new(@site, title, "tag", posts, seo_title, seo_description, seo_image, {"sitemap": false, "noindex": true})
            else
              @archives << Archive.new(@site, title, "tag", posts, seo_title, seo_description, seo_image)
            end
          end
        end
      end

      def read_categories
        if enabled? "categories"
          categories.each do |title, posts|
            seo_info = get_seo_info(title, 'categories')
            seo_title = !seo_info['title'] ? get_default_title(title) : seo_info['title']
            seo_description = !seo_info['description'] ? get_default_description() : seo_info['description']
            seo_image = !seo_info['feature_image'] ? get_default_feature_image() : seo_info['feature_image']
            @archives << Archive.new(@site, title, "category", posts, seo_title, seo_description,seo_image)
          end
        end
      end

      def read_dates
        years.each do |year, y_posts|
          append_enabled_date_type({ :year => year }, "year", y_posts)
          months(y_posts).each do |month, m_posts|
            append_enabled_date_type({ :year => year, :month => month }, "month", m_posts)
            days(m_posts).each do |day, d_posts|
              append_enabled_date_type({ :year => year, :month => month, :day => day }, "day", d_posts)
            end
          end
        end
      end

      def read_authors
        if enabled? "authors"
          category_list = categories.keys.map { |str| str.downcase }
          authors.each do |title, posts|
            seo_info = get_seo_info(title, 'authors')
            seo_title = !seo_info['title'] ? get_default_title(title) : seo_info['title']
            seo_description = !seo_info['description'] ? get_default_description() : seo_info['description']
            seo_image = !seo_info['feature_image'] ? get_default_feature_image() : seo_info['feature_image']
            if category_list.include?(title.downcase)
                # duplicate, sitemap: false, noindex: false
                @archives << Archive.new(@site, title, "author", posts, seo_title, seo_description, seo_image, {"sitemap": false, "noindex": true})
            else
                @archives << Archive.new(@site, title, "author", posts, seo_title, seo_description, seo_image)
            end
          end
        end
      end

      # Checks if archive type is enabled in config
      def enabled?(archive)
        @enabled == true || @enabled == "all" || (@enabled.is_a?(Array) && @enabled.include?(archive))
      end

      def tags
        @site.tags
      end

      def categories
        @site.categories
      end

      # Custom `post_attr_hash` method for years
      def years
        date_attr_hash(@posts.docs, "%Y")
      end

      # Custom `post_attr_hash` method for months
      def months(year_posts)
        date_attr_hash(year_posts, "%m")
      end

      # Custom `post_attr_hash` method for days
      def days(month_posts)
        date_attr_hash(month_posts, "%d")
      end

      def authors
        authors = {}
        @site.posts.docs.each do |post|
          author = post.data['author'].downcase
          if author.include?(',')
            author_array = author.split(',')
            author_array.each do |item|
                _author = item.strip
                unless authors.has_key?(_author)
                  authors[_author] = Array.new
                end
                authors[_author] << post
            end
          else
            unless authors.has_key?(author)
              authors[author] = Array.new
            end
            authors[author] << post
          end
        end
        authors
      end

      # read the jekyll-archives-seo-config.yml file to get SEO information
      def seo_config
          config = YAML.load_file('./_plugins/config/jekyll-archives-seo-config.yml')
          return config
      end

      private

      # Initialize a new Archive page and append to base array if the associated date `type`
      # has been enabled by configuration.
      #
      # meta  - A Hash of the year / month / day as applicable for date.
      # type  - The type of date archive.
      # posts - The array of posts that belong in the date archive.
      def append_enabled_date_type(meta, type, posts)
        @archives << Archive.new(@site, meta, type, posts) if enabled?(type)
      end

      # Custom `post_attr_hash` for date type archives.
      #
      # posts - Array of posts to be considered for archiving.
      # id    - String used to format post date via `Time.strptime` e.g. %Y, %m, etc.
      def date_attr_hash(posts, id)
        hash = Hash.new { |hsh, key| hsh[key] = [] }
        posts.each { |post| hash[post.date.strftime(id)] << post }
        hash.each_value { |posts| posts.sort!.reverse! }
        hash
      end
    end
  end
end
