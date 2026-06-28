# Rap Hub 🎤

**Полноценный прототип стримингового сервиса русской рэп-музыки**

## Функционал
- ✅ Красивая главная с баннером MZLFF
- ✅ Интерактивный нижний плеер
- ✅ Страницы артистов с AI-фактами
- ✅ Поиск и библиотека
- ✅ Адаптивный дизайн (glassmorphism, тёмная тема)

## Стек
**Frontend**: Next.js 15 + TypeScript + Tailwind
**Backend**: FastAPI (Python) — stub в `/backend`

## Запуск
```bash
# Frontend
npm run dev

# Backend (отдельно)
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

**GitHub**: https://github.com/felkyyyyyy/rap-hub

Готов к дальнейшей разработке: плейлисты, рекомендации, реальные аудио, PWA.