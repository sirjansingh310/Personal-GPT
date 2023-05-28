import flask
from flask import Flask
from flask import request
from flask_cors import CORS

from gpt.GPT import GPTService

app = Flask(__name__)
cors = CORS(app)

gptService = GPTService()


@app.route("/")
def home():
    return "Hello World!"


@app.route("/query")
def query():
    search = request.args.get("search")
    result = gptService.query(search)
    return flask.jsonify({"completion": result}), 200


@app.route("/file/upload", methods=["POST"])
def file_upload():
    try:
        if "file" not in request.files:
            return "Please upload file", 400
        file = request.files["file"]
        gptService.insert_file(file)
        return "file inserted", 200
    except Exception as e:
        print("exception", e)
        return "Something went wrong", 500


@app.route("/knowledge-base")
def get_kb():
    return gptService.get_file_name()


if __name__ == "__main__":
    app.run(host="localhost", port=5601)
