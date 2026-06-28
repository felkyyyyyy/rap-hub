import Player from '../components/Player';
import ArtistCard from '../components/ArtistCard';

export default function Home() {
  const artists = [
    { name: 'MZLFF', slug: 'mzlff', image: 'https://picsum.photos/id/1015/400/400' },
    { name: 'Pharaoh', slug: 'pharaoh', image: 'https://picsum.photos/id/1027/400/400' },
    { name: 'Скриптонит', slug: 'skriptonit', image: 'https://picsum.photos/id/106/400/400' },
    { name: 'Boulevard Depo', slug: 'boulevard-depo', image: 'https://picsum.photos/id/201/400/400' },
    { name: 'Oxxxymiron', slug: 'oxxxymiron', image: 'https://picsum.photos/id/64/400/400' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pb-24">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-3xl font-black tracking-tighter text-red-500">RAP<span className="text-white">HUB</span></div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="/" className="hover:text-red-500 transition">Главная</a>
              <a href="/search" className="hover:text-red-500 transition">Поиск</a>
              <a href="/library" className="hover:text-red-500 transition">Библиотека</a>
            </div>
          </div>
          <div className="flex-1 max-w-md mx-8">
            <input type="text" placeholder="🔍 Поиск треков и артистов" className="glass w-full py-3 px-5 rounded-2xl text-sm border border-zinc-700 focus:border-red-500 outline-none" />
          </div>
          <div className="text-sm">👤 Профиль</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ff000020_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
        <img src="https://picsum.photos/id/1015/1920/1080" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="MZLFF" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm mb-6 border border-red-500/30">АРТИСТ НЕДЕЛИ 🔥</div>
          <h1 className="text-[120px] font-black tracking-tighter leading-none mb-4">MZLFF</h1>
          <p className="text-2xl mb-10 text-zinc-300">Новая школа русского рэпа</p>
          <a href="/artist/mzlff" className="inline-block bg-red-600 hover:bg-red-500 px-12 py-5 rounded-2xl text-xl font-semibold transition-all active:scale-95">Слушать сейчас</a>
        </div>
      </div>

      {/* Popular */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Популярные артисты</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {artists.map((artist, i) => (
            <ArtistCard key={i} {...artist} />
          ))}
        </div>
      </div>

      <Player />
    </div>
  );
}