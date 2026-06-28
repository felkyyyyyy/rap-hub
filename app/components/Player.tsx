'use client';
export default function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-700 p-3 flex items-center gap-4 z-50">
      {/* Track info */}
      <div className="flex items-center gap-4 w-72">
        <div className="w-14 h-14 bg-zinc-700 rounded-md"></div>
        <div>
          <div className="font-medium text-sm">Название трека</div>
          <div className="text-xs text-zinc-400">Артист</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center flex-1 max-w-md">
        <div className="flex gap-6 text-3xl mb-1">⏮️ ▶️ ⏭️</div>
        <div className="w-full h-1 bg-zinc-700 rounded-full relative cursor-pointer">
          <div className="absolute h-full w-1/3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Volume */}
      <div className="w-32">🔊</div>
    </div>
  );
}