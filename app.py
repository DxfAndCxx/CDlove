# coding: utf-8
import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/v1/api/app/tracker/batch.json', methods=['POST'])
def batch():
    return jsonify({"meta":{"result":True, "status_code":200}})

@app.route('/p/wedding/index.php/Home/APIInvationV2/pageListByCardId/id/cardID')
def cardID():
    with open('config/info.json') as fp:
        data = json.load(fp)
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5200, debug=True)
