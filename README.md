# Rap Hub

**Веб-версия стримингового сервиса для новой школы русского рэпа** 🎧

Современный сайт в стиле **Яндекс Музыка**.

## Технологии
- Next.js 15 (App Router)
- Tailwind CSS
- TypeScript
- FastAPI backend (остаётся)

## Запуск

```bash
# Frontend
cd frontend/web
npm install
npm run dev

# Backend (в другом терминале)
cd ../../backend
uvicorn main:app --reload
```