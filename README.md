# Rap Hub

**Стриминговый сервис для новой школы русского рэпа с нейросетным мозгом** 🎤🔥

Современное десктопное приложение + веб-платформа в стиле Яндекс Музыки / Spotify.

## Особенности
- Красивый тёмный интерфейс с glassmorphism
- Реальные треки и альбомы русских рэп-исполнителей
- AI-факты об артистах (через Groq + Serper)
- Поиск, рекомендации, плеер
- PySide6 Desktop + FastAPI backend

## Быстрый старт

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Desktop
```bash
cd frontend/desktop
pip install -r requirements.txt
python main.py
```

## Стек
- **Backend**: FastAPI + Python
- **Desktop**: PySide6
- **AI**: Groq Llama-3.3-70B + Serper.dev
- **Музыка**: iTunes API, MusicBrainz, Deezer Preview

---

Made with ❤️ for Russian Rap New School