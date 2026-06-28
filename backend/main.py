from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Rap Hub Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Rap Hub API is running. Russian rap streaming backend."}

@app.get("/artists")
def get_artists():
    return [
        {"id": 1, "name": "MZLFF", "genre": "trap"},
        {"id": 2, "name": "Pharaoh", "genre": "cloud rap"}
    ]

# TODO: Add tracks, auth, AI facts endpoint with Groq/Grok