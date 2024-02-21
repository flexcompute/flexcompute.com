from bs4 import BeautifulSoup, Comment
import sys, base64, binascii, imghdr, re, os, shutil

input_file = "../_includes/inverse-design/Python_Tutorial_05.html"
img_output_directory = "./"

class Utils:
    @staticmethod
    def replace_last_slash_with_ipynb(s):
        index = s.rfind('/')
        if index != -1:
            return s[:index] + '.ipynb' + s[index+1:]
        else:
            return s

    @staticmethod
    def is_base64_image(src):
        try:
            return src[:10] == 'data:image' and base64.b64decode(src.split(',')[1])
        except (TypeError, binascii.Error):
            return False

    @staticmethod
    def remove_base64_header(base64_string):
        if base64_string.startswith("data:image"):
            base64_string = base64_string.split(",", 1)[1]
        return base64_string

    @staticmethod
    def is_valid_base64(base64_str):
        try:
            base64.b64decode(base64_str)
            return True
        except base64.binascii.Error:
            return False

    @staticmethod
    def fix_base64(base64_code):
        base64_code = base64_code.replace(" ", "").replace(
            "\n", "").replace("\t", "").replace("\\", "")
        # Check if the length is a multiple of 4 (add padding if needed)
        padding = len(base64_code) % 4
        if padding:
            base64_code += "=" * (4 - padding)
        return base64_code

    @staticmethod
    def extract_base64_from_html(html_content):
        # Regular expression to find base64 encoded strings
        base64_pattern = r'data:image/[a-zA-Z]+;base64,([A-Za-z0-9+/=\\\n\r]+)'

        # Find all matches using regex
        base64_matches = re.findall(base64_pattern, html_content)

        # Remove newline characters from the base64 strings
        base64_strings = [base64 for base64 in base64_matches]

        return base64_strings

def base64_to_image(src, file_name=None, index=None):
    file_directory = f'{img_output_directory}{file_name}'
    if not os.path.exists(file_directory):
        os.mkdir(file_directory)
    base64_code = Utils.remove_base64_header(src)
    valid = Utils.is_valid_base64(base64_code)
    if not valid:
        base64_code = Utils.fix_base64(base64_code)
    image_data = base64.b64decode(base64_code)
    image_type = imghdr.what(None, image_data)

    image_file_name = f'{file_name}_{index + 1}.{image_type}'
    image_file = f'{file_directory}/{image_file_name}'
    with open(image_file, 'wb') as file:
        file.write(image_data)

    if os.path.exists(image_file):
        return f'./{file_name}/{image_file_name}'

    return ''

def move_image(src):
    img_path = os.path.join('./notebooks', src)
    is_exist = os.path.exists(img_path)
    if is_exist:
        image_name = os.path.basename(img_path)
        shutil.copy(img_path, img_output_directory)
        return f'./{image_name}'
    return ''

def image_convert(soup, file_name=None):
    for index, img in enumerate(soup.find_all('img')):
        if not 'src' in img.attrs:
            break
        img_src = img['src']
        if (Utils.is_base64_image(img_src)):
            new_image_path = base64_to_image(
                img_src, file_name, index)
            if new_image_path:
                img['src'] = new_image_path
            continue
        else:
            new_image_path = move_image(img_src)
            if new_image_path:
                img['src'] = new_image_path
            continue

def replace_base64_with_static_file(html_content, file_name=None):
    base64_strings = Utils.extract_base64_from_html(html_content)
    for idx, base64_string in enumerate(base64_strings):
        # Save the base64 as a static file
        new_image_path = base64_to_image(
            base64_string, file_name+'_extra', idx)
        if new_image_path:
            # Replace the base64 string in the HTML with the static file path
            html_content = html_content.replace(
                f"data:image/png;base64,{base64_string}", new_image_path)

    return html_content

def main(input_file):
    file_name = os.path.splitext(os.path.basename(input_file))[0]
    with open(input_file, 'r') as html_file:
        content = html_file.read()

        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(content, 'html.parser')
        # remove comments code
        comments = soup.findAll(
            string=lambda text: isinstance(text, Comment))
        for comment in comments:
            comment.extract()

        image_convert(soup, file_name)
        ouptut_html = str(soup)

        ouptut_html = replace_base64_with_static_file(ouptut_html, file_name)

        pattern = re.compile(r'<!DOCTYPE html>')
        ouptut_html = pattern.sub('', ouptut_html)
        with open('minify.html', 'w') as output_file:
            output_file.write(ouptut_html)

        pass
    pass

main(input_file)
