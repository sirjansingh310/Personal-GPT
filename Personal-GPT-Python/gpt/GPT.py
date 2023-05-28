from llama_index import StorageContext, load_index_from_storage, SimpleDirectoryReader, GPTVectorStoreIndex
import os

from werkzeug.utils import secure_filename


class GPT:
    index = None
    queryEngine = None

    def __init__(self):
        documents = SimpleDirectoryReader("./knowledge-base").load_data()
        # todo save in db instead of creating in-memory on server start
        self.index = GPTVectorStoreIndex.from_documents(documents)

    def query(self, queryString):
        # from the documents as Vectors, and with help of query string, we send only relevant text to GPT when actual
        # prompt is created.
        queryEngine = self.index.as_query_engine()
        return queryEngine.query(queryString)

    def insert_file(self, file):
        filename = secure_filename(file.filename)
        filepath = os.path.join('knowledge-base', filename)
        file.save(filepath)
        document = SimpleDirectoryReader(input_files=[filepath]).load_data()[0]
        self.index.insert(document)