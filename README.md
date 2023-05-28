# Personal-GPT
## Setup

Export OPENAI_API_KEY ENV variable on your computer\
Clone the Repo\
pip install -r requirements.txt\
Now you are ready to run the main.py file. The flask app runs on localhost:5601
Now goto gpt-ui. Install Node and npm if you don't have them installed. Install the dependencies by running npm i\
Start the Front end react app usign npm start

# How does it work? 
Files stored in knowledge-base folder are used to answer query prompts. Using LlamaIndex, vector embeddings of
the uploaded files are created. The vector close to the query input are sent to gpt to answer the input prompt. 

# Tech stack and tools
Python, Flask, Open AI, LlamaIndex, React

## Demo


https://github.com/sirjansingh310/Personal-GPT/assets/26526359/f91d8380-a658-46f1-a2c8-d8b2dd3b6c62

