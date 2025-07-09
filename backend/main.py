from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import json
import random
import os

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load quotes from JSON
quotes_path = os.path.join(os.path.dirname(__file__), "quotes.json")
with open(quotes_path) as f:
    quotes = json.load(f)

@app.get("/quotes")
def get_quotes(topic: str = Query(...)):
    filtered = [q["quote"] for q in quotes if q["topic"].lower() == topic.lower()]
    return {"quotes": random.sample(filtered, min(3, len(filtered)))} 