# coding: utf-8
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '陈小姐 and 丁先生婚礼，尽情期待...'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=520)
