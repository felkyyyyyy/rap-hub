'use client';

import { useState } from 'react';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const mzlffTracks = [
    { id: 1, title: 'КАЧ', artist: 'MZLFF', duration: '2:45', preview: 'https://example.com/preview1.mp3' },
    { id: 2, title: 'Для тебя', artist: 'MZLFF', duration: '3:12', preview: '' },
    { id: 3, title: 'Ghost', artist: 'MZLFF', duration: '2:58' },
    { id: 4, title: 'Night Drive', artist: 'MZLFF', duration: '3:40' },
    { id: 5, title: 'Паранойя', artist: 'MZLFF', duration: '2:30' },
  ];

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    // В реальности здесь будет аудио плеер
    console.log('Playing:', track.title);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-3xl font-bold tracking-tighter text-violet-400">RAP HUB</div>
            <nav className="flex gap-8 text-sm">
              <a href="#" className="hover:text-violet-400 transition">Главная</a>
              <a href="#" className="hover:text-violet-400 transition">Чарты</a>
              <a href="#" className="hover:text-violet-400 transition">Новое</a>
            </nav>
          </div>
          <div className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Поиск артистов, треков, альбомов..."
              className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition">Профиль</button>
          </div>
        </div>
      </header>

      <main className="pt-20 pb-24 max-w-7xl mx-auto px-6">
        {/* Hero Banner */}
        <div className="relative h-[480px] rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <img src="https://picsum.photos/id/1015/1920/1080" alt="MZLFF" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-12 left-12 z-20">
            <div className="uppercase tracking-widest text-violet-400 text-sm mb-2">АРТИСТ НЕДЕЛИ</div>
            <h1 className="text-7xl font-black mb-4">MZLFF</h1>
            <p className="text-xl text-white/80 mb-6 max-w-md">Новая школа. Тёмная энергия. Фантомы в голове.</p>
            <button 
              onClick={() => playTrack(mzlffTracks[0])}
              className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition flex items-center gap-3"
            >
              ▶️ Слушать
            </button>
          </div>
        </div>

        {/* Popular Artists */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Популярные артисты</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['MZLFF', 'Скриптонит', 'Oxxxymiron', 'FACE', 'Хаски', 'Слава КПСС'].map((artist, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img src={`https://picsum.photos/id/${100+i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="font-semibold text-lg">{artist}</div>
                <div className="text-sm text-white/60">Русский рэп</div>
              </div>
            ))}
          </div>
        </section>

        {/* MZLFF Section */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold">MZLFF</h2>
            <button className="text-violet-400 hover:underline">Все альбомы →</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Player Sidebar */}
            <div className="lg:col-span-4">
              <div className="glass rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl mb-6">Сейчас играет</h3>
                {currentTrack ? (
                  <div>
                    <div className="text-2xl font-bold mb-1">{currentTrack.title}</div>
                    <div className="text-white/70 mb-8">{currentTrack.artist}</div>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-full py-4 bg-violet-600 hover:bg-violet-500 rounded-2xl text-lg font-semibold"
                    >
                      {isPlaying ? '⏸️ Пауза' : '▶️ Воспроизвести'}
                    </button>
                  </div>
                ) : (
                  <p className="text-white/50">Выберите трек</p>
                )}
              </div>
            </div>

            {/* Tracklist */}
            <div className="lg:col-span-8">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl mb-6">Треки MZLFF</h3>
                <div className="space-y-2">
                  {mzlffTracks.map((track, index) => (
                    <div
                      key={index}
                      onClick={() => playTrack(track)}
                      className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl cursor-pointer group transition"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-8 text-right text-white/40 group-hover:text-white">{index + 1}</div>
                        <div>
                          <div className="font-medium">{track.title}</div>
                          <div className="text-sm text-white/60">{track.artist}</div>
                        </div>
                      </div>
                      <div className="text-white/60">{track.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 py-3">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl"></div>
            <div className="flex-1">
              <div className="font-medium">{currentTrack.title}</div>
              <div className="text-sm text-white/60">{currentTrack.artist}</div>
            </div>
            <div className="flex items-center gap-8">
              <button>◀️</button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="text-3xl">{isPlaying ? '⏸️' : '▶️'}</button>
              <button>▶️</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
