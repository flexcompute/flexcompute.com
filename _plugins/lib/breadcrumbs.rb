module Jekyll
  class Breadcrumbs < Liquid::Tag
    def initialize(tag_name, url, tokens)
      super
      @url = url

    end

    def extract_h1_content(page_content)
      return "N/A" if page_content.nil?
      match = page_content.match(/<h1.*?>(.*?)<\/h1>/i)
      match ? match[1] : "N/A"
    end

    def render(context)
       site = context.registers[:site]
       page_url = context.registers[:page]['url']
       page_content = context.registers[:page]['content']
       h1_content = extract_h1_content(page_content)
       menus = site.data['site_map']['main_menu']

       breadcrumbs = []
       outer_loop_label = :outer_loop
       menus.each do |menu|
         if menu.has_key?("submenu")
           menu['submenu'].each do |submenu|
             root_menu = {"name" => menu['text'], "url" => menu['url'] }
             current_menu = {"name" => submenu['text'], "url" => submenu['url'] }
             if submenu['url'].eql?(page_url) and breadcrumbs.size === 0
                breadcrumbs << root_menu
                breadcrumbs << current_menu
             elsif page_url.start_with?(submenu['url']) and breadcrumbs.size === 0
                breadcrumbs << root_menu
                breadcrumbs << current_menu
             end
           end
         end
       end
       render_text = ''
       breadcrumbs.each do |breadcrumb|
          render_text += "<meta name='breadcrumb' content='#{breadcrumb['name']}:#{breadcrumb['url']}'>"
       end
       render_text
    end
  end
end

Liquid::Template.register_tag('breadcrumbs', Jekyll::Breadcrumbs)
