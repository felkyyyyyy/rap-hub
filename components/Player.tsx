'use client';
import { useState, useRef, useEffect } from 'react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Real preview track example (public domain or free preview)
  const trackUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Replace with real rap preview

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={trackUrl} />
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-700 z-50">
        <div className="max-w-screen-2xl mx-auto px-8 py-3 flex items-center gap-6">
          <div className="flex items-center gap-4 w-72">
            <div className="w-14 h-14 bg-zinc-800 rounded-md"></div>
            <div>
              <div className="font-medium text-sm">Новый уровень</div>
              <div className="text-xs text-zinc-400">MZLFF</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <div className="flex gap-6 text-2xl">
              <button>♡</button>
              <button onClick={togglePlay} className="text-4xl -mt-1">{isPlaying ? '⏸️' : '▶️'}</button>
              <button>♫</button>
            </div>
            <div className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-500">
              <span>0:45</span>
              <div className="h-1 bg-zinc-700 flex-1 rounded-full relative cursor-pointer" onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress(((e.clientX - rect.left) / rect.width) * 100);
              }}>
                <div className="h-1 bg-red-500 rounded-full absolute top-0 left-0" style={{width: `${progress}%`}}></div>
              </div>
              <span>3:12</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <button>📻</button>
            <button>🔊</button>
          </div>
        </div>
      </div>
    </>
  );
}