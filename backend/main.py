from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Rap Hub API",
    description="Backend для Rap Hub — стримингового сервиса русского рэпа",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "🎧 Rap Hub API работает!",
        "status": "ok",
        "version": "0.1.0"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

# TODO: Добавить роуты для artists, ai_facts, search, music
print("Rap Hub Backend запущен!")