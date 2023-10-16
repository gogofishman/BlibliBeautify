# 用于将css文件作为文本加入到js文件中

import glob
import os
import sys
import pyperclip
import jsbeautifier

source_file: str
dist_file: str

Css_text: str
"""css内容"""
Scripts_text: str
"""脚本内容"""

if __name__ == '__main__':

    if not os.getcwd().endswith('BlibliBeautify'):
        print('请在BlibliBeautify目录下使用cmd运行该脚本')
        exit()

    if len(sys.argv) != 2:
        print("请输入1个参数，源码入口js文件")
    else:
        source_file = sys.argv[1]

        # 获取所有css文件的内容
        css_files = glob.glob(os.path.join(r"src\css", '**/*.css'), recursive=True)
        Css_text = ""
        for css_file in css_files:
            with open(css_file, 'r', encoding='utf-8-sig') as file:
                Css_text += file.read() + "\n"

        # 获取脚本内容并替换
        with open(source_file, "r", encoding="utf-8") as f:
            Scripts_text = f.read()

        # 添加css
        check = '"use strict";'
        if check in Scripts_text:
            Scripts_text = Scripts_text.replace(check,
                                                check + "\n\n" + f"GM_addStyle(`{Css_text}`);")

        # 美化js代码
        Scripts_text = jsbeautifier.beautify(Scripts_text, {
            "indent_size": "2",
            "indent_char": " ",
            "max_preserve_newlines": "2",
            "preserve_newlines": True,
            "keep_array_indentation": False,
            "break_chained_methods": True,
            "indent_scripts": "normal",
            "brace_style": "collapse,preserve-inline",
            "space_before_conditional": True,
            "unescape_strings": False,
            "jslint_happy": True,
            "end_with_newline": False,
            "wrap_line_length": "70",
            "indent_inner_html": False,
            "comma_first": False,
            "e4x": False,
            "indent_empty_lines": False
        })

        # 检查output文件夹
        folder_name = r"output"
        if not os.path.exists(folder_name):
            # 如果文件夹不存在，创建它
            print('创建output文件夹...')
            os.mkdir(folder_name)

        # 写入文件
        output_file_path = r"output\output.js"
        with open(output_file_path, "w", encoding="utf-8") as file:
            file.write(Scripts_text)

        # 将文本复制到剪贴板
        pyperclip.copy(Scripts_text)
        print('已将脚本文本复制到粘贴板中...')
