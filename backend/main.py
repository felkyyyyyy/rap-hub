from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Rap Hub API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Rap Hub Backend is running!"}

@app.get("/artists")
def get_artists():
    return [
        {"id": 1, "name": "MZLFF", "slug": "mzlff"},
        {"id": 2, "name": "Pharaoh", "slug": "pharaoh"},
    ]

# TODO: добавить эндпоинты для треков, поиска, AI-фактов