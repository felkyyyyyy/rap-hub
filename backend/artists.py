from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter(prefix="/artists", tags=["artists"])

class Track(BaseModel):
    title: str
    duration: str
    preview_url: Optional[str] = None

class Album(BaseModel):
    title: str
    year: int
    cover: Optional[str] = None

class Artist(BaseModel):
    name: str
    genre: str = "Русский рэп"
    listeners: int
    image: str
    bio: Optional[str] = None
    albums: List[Album] = []
    tracks: List[Track] = []

# Полная дискография MZLFF
MZLFF_DATA = {
    "name": "MZLFF",
    "genre": "Русский рэп / Cloud Rap / Trap",
    "listeners": 1250000,
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
    "bio": "MZLFF — яркий представитель новой школы русского рэпа, известный атмосферными битами и эмоциональными текстами.",
    "albums": [
        {"title": "PHANTASMAGORIA", "year": 2025, "cover": "https://example.com/phantasmagoria.jpg"},
        {"title": "светлая сторона", "year": 2024, "cover": "https://example.com/lightside.jpg"},
        {"title": "не забытое старое", "year": 2025, "cover": "https://example.com/old.jpg"},
        {"title": "КЛУБНЫЙ РЭП", "year": 2023}
    ],
    "tracks": [
        {"title": "КАЧ", "duration": "4:15"},
        {"title": "для тебя", "duration": "3:42"},
        {"title": "потерянный мир", "duration": "2:38"},
        {"title": "всем вернётся", "duration": "3:10"},
        {"title": "ghost", "duration": "2:55"},
        {"title": "night drive", "duration": "4:05"},
        {"title": "паранойя", "duration": "3:20"},
        {"title": "моя луна", "duration": "3:50"},
        {"title": "PHANTASMAGORIA (title track)", "duration": "5:12"},
        {"title": "cloud9", "duration": "2:45"}
    ]
}

@router.get("/search")
async def search_artists(q: str):
    if "mzlff" in q.lower() or "mzl" in q.lower():
        return [MZLFF_DATA]
    return [{"name": q, "genre": "Русский рэп", "listeners": 450000, "image": ""}]

@router.get("/{artist_name}")
async def get_artist(artist_name: str):
    if artist_name.lower() == "mzlff":
        return MZLFF_DATA
    raise HTTPException(status_code=404, detail="Артист не найден. Попробуйте MZLFF")