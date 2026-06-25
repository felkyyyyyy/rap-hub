// Full modern Next.js page for Rap Hub in Yandex Music style
'use client';

import { useState } from 'react';

const artists = [
  {
    id: 1,
    name: 'MZLFF',
    image: 'https://i.scdn.co/image/ab67616100005174a1e5e5e5e5e5e5e5e5e5e5e5', // Placeholder, use real if possible
    genre: 'Новый рэп',
    listeners: '1.2M',
    bio: 'Один из самых ярких представителей новой школы русского рэпа.',
  },
  {
    id: 2,
    name: 'Скриптонит',
    image: 'https://picsum.photos/id/64/300/300',
    genre: 'Cloud Rap',
    listeners: '2.8M',
  },
  {
    id: 3,
    name: 'Pharaoh',
    image: 'https://picsum.photos/id/201/300/300',
    genre: 'Trap / Cloud',
    listeners: '3.5M',
  },
  {
    id: 4,
    name: 'Boulevard Depo',
    image: 'https://picsum.photos/id/180/300/300',
    genre: 'Новый рэп',
    listeners: '1.8M',
  },
];

const mzlffTracks = [
  { id: 1, title: 'КАЧ', duration: '2:45', preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Для тебя', duration: '3:12', preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Потерянный мир', duration: '2:58', preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 4, title: 'Ghost', duration: '3:05', preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 5, title: 'Night Drive', duration: '4:10', preview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const filteredArtists = artists.filter(a => 
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    const audio = new Audio(track.preview);
    audio.play();
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Top Navigation - like Yandex Music */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-3xl font-black tracking-tighter text-white">RAP HUB</div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="hover:text-white/80">Главная</a>
              <a href="#" className="hover:text-white/80">Поиск</a>
              <a href="#" className="hover:text-white/80">Моя музыка</a>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Поиск исполнителей, треков и альбомов"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-violet-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-zinc-700 rounded-full"></div>
          </div>
        </div>
      </nav>

      <main className="pt-20 max-w-[1400px] mx-auto px-8">
        {/* Hero Banner */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img 
            src="https://picsum.photos/id/1015/1400/600" 
            alt="MZLFF" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute bottom-12 left-12 z-10">
            <div className="uppercase tracking-[4px] text-sm mb-2 text-violet-400">АРТИСТ НЕДЕЛИ</div>
            <h1 className="text-8xl font-black tracking-tighter">MZLFF</h1>
            <p className="text-2xl mt-3 text-white/90">Новая школа русского рэпа</p>
            <button 
              onClick={() => playTrack(mzlffTracks[0])}
              className="mt-8 px-10 py-4 bg-white hover:bg-white/90 text-black font-semibold rounded-full text-lg transition-all active:scale-95"
            >
              ▶ СЛУШАТЬ
            </button>
          </div>
        </div>

        {/* Popular Artists */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">Популярные артисты новой школы</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredArtists.map((artist) => (
              <div 
                key={artist.id}
                onClick={() => setSelectedArtist(artist)}
                className="group bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl group-hover:text-violet-400 transition-colors">{artist.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{artist.genre}</p>
                  <p className="text-xs text-zinc-500 mt-3">{artist.listeners} слушателей</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MZLFF Tracks */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-semibold">Треки MZLFF</h2>
            <span className="text-sm text-zinc-400">Все альбомы</span>
          </div>
          <div className="space-y-2">
            {mzlffTracks.map((track, index) => (
              <div
                key={track.id}
                onClick={() => playTrack(track)}
                className="group flex items-center gap-6 bg-zinc-900/70 hover:bg-zinc-800 px-6 py-4 rounded-2xl cursor-pointer transition-all"
              >
                <div className="w-8 text-right text-zinc-400 group-hover:text-white">{index + 1}</div>
                <div className="flex-1">
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-zinc-400">MZLFF</p>
                </div>
                <div className="text-sm text-zinc-400">{track.duration}</div>
                <button className="opacity-0 group-hover:opacity-100 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl transition-all">▶</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Player - Yandex Music style */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-white/10 h-24 z-50">
          <div className="max-w-[1400px] mx-auto h-full px-8 flex items-center gap-6">
            <div className="flex items-center gap-4 w-72">
              <img src="https://picsum.photos/id/1015/64/64" className="w-14 h-14 rounded-lg" alt="" />
              <div>
                <p className="font-medium">{currentTrack.title}</p>
                <p className="text-sm text-zinc-400">MZLFF</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="flex items-center gap-8 text-2xl">
                <button>⤢</button>
                <button onClick={() => setIsPlaying(!isPlaying)} className="text-4xl">{isPlaying ? '⏸' : '▶'}</button>
                <button>⤡</button>
              </div>
              <div className="w-full max-w-md h-1 bg-white/20 rounded-full relative">
                <div className="absolute left-0 top-0 h-1 bg-white rounded-full w-1/3"></div>
              </div>
            </div>

            <div className="w-72 flex justify-end text-zinc-400 text-sm">
              {currentTrack.duration}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
