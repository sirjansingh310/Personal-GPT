from flask import Flask
from flask import request

from gpt.GPT import GPT

app = Flask(__name__)
gpt = GPT()


@app.route("/")
def home():
    return "Hello World!"


@app.route("/query")
def query():
    search = request.args.get("search")
    return str(gpt.query(search)), 200


@app.route("/file/upload", methods=["POST"])
def file_upload():
    try:
        if "file" not in request.files:
            return "Please upload file", 400
        file = request.files["file"]
        gpt.insert_file(file)
        return "file inserted", 200
    except Exception as e:
        print("exception", e)
        return "Something went wrong", 500


if __name__ == "__main__":
    app.run(host="localhost", port=5601)
