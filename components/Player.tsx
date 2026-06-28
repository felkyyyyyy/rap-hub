'use client';
import { useState } from 'react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-700 p-3 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="w-14 h-14 bg-zinc-700 rounded-lg flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">Последний трек</div>
          <div className="text-zinc-400 text-sm truncate">MZLFF - Новый уровень</div>
        </div>

        <div className="flex items-center gap-6 text-3xl">
          <button>⏮️</button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-4xl hover:scale-110 transition">
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button>⏭️</button>
        </div>

        <div className="flex-1 flex items-center gap-3">
          <span className="text-xs text-zinc-500 w-10">1:23</span>
          <div className="h-1 bg-zinc-700 flex-1 rounded-full relative cursor-pointer" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setProgress((x / rect.width) * 100);
          }}>
            <div className="absolute top-0 left-0 h-full bg-red-500 rounded-full" style={{width: `${progress}%`}}></div>
          </div>
          <span className="text-xs text-zinc-500 w-10">3:45</span>
        </div>
      </div>
    </div>
  );
}