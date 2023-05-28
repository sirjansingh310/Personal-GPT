# Personal-GPT
## Setup

Export OPENAI_API_KEY ENV variable on your computer\
Clone the Repo\
pip install -r requirements.txt\
Now you are ready to run the main.py file. The flask app runs on localhost:5601

# How does it work? 
Files stored in knowledge-base folder are used to answer query prompts.  Using LlamaIndex, vector embeddings of
the uploaded files are created. The vector close to the query input are sent to gpt to answer the input prompt. 

# Tech stack and tools
Python, Flask, Open AI, LlamaIndex, React