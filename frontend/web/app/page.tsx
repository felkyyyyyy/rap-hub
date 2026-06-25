'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Search, Home, User } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
  cover: string;
}

const mzlffTracks: Track[] = [
  {
    id: 1,
    title: "в пряничном домике",
    artist: "MZLFF",
    duration: "2:52",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://i.ytimg.com/vi/0YhKKu8D-eI/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "бэйслайн бизнес",
    artist: "MZLFF",
    duration: "1:52",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://i.ytimg.com/vi/HIl0jzLga58/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "оставь себе",
    artist: "MZLFF feat. Pyrokinesis",
    duration: "2:38",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://i.ytimg.com/vi/cDUFgXLVOuA/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "GDE PAPA LONGMIX",
    artist: "MZLFF",
    duration: "4:15",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://picsum.photos/id/1015/300/300"
  },
];

export default function RapHub() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = track.audioUrl;
      audioRef.current.play();
    }
  };

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

  const artists = [
    { name: "MZLFF", listeners: "1.2M", image: "https://i.ytimg.com/vi/0YhKKu8D-eI/maxresdefault.jpg", genre: "Новый рэп" },
    { name: "Скриптонит", listeners: "2.4M", image: "https://picsum.photos/id/64/300/300", genre: "Cloud Rap" },
    { name: "Pharaoh", listeners: "3.1M", image: "https://picsum.photos/id/201/300/300", genre: "Trap / Cloud" },
    { name: "Boulevard Depo", listeners: "1.8M", image: "https://picsum.photos/id/870/300/300", genre: "Новый рэп" },
  ];

  const filteredArtists = artists.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-black/90 border-r border-white/10 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold">RH</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter">Rap Hub</div>
              <div className="text-xs text-zinc-500">Новая школа</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer">
              <Home size={20} />
              <span>Главная</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer">
              <Search size={20} />
              <span>Поиск</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer">
              <User size={20} />
              <span>Библиотека</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-32">
        {/* Top Bar */}
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-4 top-3 text-zinc-500" size={20} />
            <input
              type="text"
              placeholder="Исполнители, треки, альбомы..."
              className="w-full bg-zinc-900 border border-white/10 pl-11 py-3 rounded-2xl text-sm focus:outline-none focus:border-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-zinc-400">MZLFF — Артист недели</div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative h-[420px] bg-gradient-to-br from-red-900 via-black to-black overflow-hidden">
          <img 
            src="https://i.ytimg.com/vi/0YhKKu8D-eI/maxresdefault.jpg" 
            alt="MZLFF" 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          
          <div className="absolute bottom-12 left-12">
            <div className="text-red-500 font-bold tracking-widest text-sm mb-2">АРТИСТ НЕДЕЛИ</div>
            <div className="text-7xl font-black tracking-tighter mb-2">MZLFF</div>
            <div className="text-2xl text-zinc-300 mb-6">Новая школа • 1.2M слушателей</div>
            
            <button 
              onClick={() => playTrack(mzlffTracks[0])}
              className="bg-white hover:bg-white/90 text-black px-10 py-3.5 rounded-full font-semibold flex items-center gap-3 text-lg transition"
            >
              <Play fill="black" className="ml-1" size={28} /> Слушать
            </button>
          </div>
        </div>

        {/* Popular Artists */}
        <div className="px-8 py-10">
          <h2 className="text-2xl font-bold mb-6">Популярные артисты новой школы</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredArtists.map((artist, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden cursor-pointer group" onClick={() => alert(`Открываем страницу ${artist.name}`)}>
                <div className="relative">
                  <img src={artist.image} alt={artist.name} className="w-full aspect-square object-cover" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                      <Play fill="black" size={22} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-bold text-xl">{artist.name}</div>
                  <div className="text-sm text-zinc-400">{artist.genre}</div>
                  <div className="text-xs text-zinc-500 mt-1">{artist.listeners} слушателей</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MZLFF Tracks */}
        <div className="px-8 pb-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl font-bold">Треки MZLFF</h2>
            <span className="text-zinc-400">Сейчас в тренде</span>
          </div>

          <div className="space-y-1">
            {mzlffTracks.map((track, index) => (
              <div 
                key={track.id}
                onClick={() => playTrack(track)}
                className="track-item group flex items-center px-6 py-4 rounded-2xl hover:bg-white/5 cursor-pointer transition-all"
              >
                <div className="w-12 text-zinc-400 text-right pr-6 font-mono">{(index+1).toString().padStart(2, '0')}</div>
                
                <div className="flex-1 flex items-center gap-4">
                  <img src={track.cover} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <div className="font-medium group-hover:text-white">{track.title}</div>
                    <div className="text-sm text-zinc-400">{track.artist}</div>
                  </div>
                </div>
                
                <div className="text-sm text-zinc-400 font-mono w-16 text-right">{track.duration}</div>
                
                <button className="ml-8 opacity-0 group-hover:opacity-100">
                  <Heart size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Player */}
      {currentTrack && (
        <div className="player fixed bottom-0 left-0 right-0 h-24 border-t border-white/10 bg-[#111] z-50 flex items-center px-6">
          <div className="flex items-center gap-4 w-72">
            <img src={currentTrack.cover} className="w-14 h-14 rounded-lg" />
            <div>
              <div className="font-medium">{currentTrack.title}</div>
              <div className="text-sm text-zinc-400">{currentTrack.artist}</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-8 mb-2">
              <SkipBack size={20} className="text-zinc-400 hover:text-white cursor-pointer" />
              <button 
                onClick={togglePlay}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition"
              >
                {isPlaying ? <Pause size={22} fill="black" /> : <Play size={22} fill="black" />}
              </button>
              <SkipForward size={20} className="text-zinc-400 hover:text-white cursor-pointer" />
            </div>
            
            <div className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400">
              <span>0:00</span>
              <div className="h-1 flex-1 bg-white/20 rounded-full relative">
                <div className="absolute left-0 top-0 h-1 bg-white rounded-full" style={{width: `${progress}%`}} />
              </div>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

          <div className="w-72 flex justify-end items-center gap-4 text-zinc-400">
            <Heart size={20} />
            <div className="text-xs">AI ФАКТЫ</div>
          </div>
        </div>
      )}

      <audio 
        ref={audioRef} 
        onTimeUpdate={(e) => {
          const percent = (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
          setProgress(percent || 0);
        }}
      />

      {/* AI Facts Modal simulation */}
      <div className="fixed bottom-28 right-8 bg-zinc-900/90 backdrop-blur p-6 rounded-3xl max-w-xs glass hidden lg:block">
        <div className="text-xs uppercase tracking-widest mb-2 text-red-400">Нейросетные факты</div>
        <div className="text-sm leading-relaxed text-zinc-300">
          MZLFF успешно балансирует между турами, студией и стримом. Его альбом PHANTASMAGORIA 2025 — один из самых ожидаемых релизов года.
        </div>
      </div>
    </div>
  );
}
