import Player from '../components/Player';
import ArtistCard from '../components/ArtistCard';

export default function Home() {
  const artists = [
    { name: 'MZLFF', slug: 'mzlff', image: 'https://i.scdn.co/image/ab6761610000e5eb0c8b5c7f8f0e1e2a3b4c5d6e' },
    { name: 'Pharaoh', slug: 'pharaoh', image: 'https://i.scdn.co/image/ab6761610000e5eb1234567890abcdef' },
    { name: 'Скриптонит', slug: 'skriptonit', image: 'https://i.scdn.co/image/ab6761610000e5ebabcdef1234567890' },
    { name: 'Boulevard Depo', slug: 'boulevard-depo', image: 'https://picsum.photos/id/201/400/400' },
    { name: 'Oxxxymiron', slug: 'oxxxymiron', image: 'https://i.scdn.co/image/ab6761610000e5eb0987654321fedcba' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pb-24 font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-zinc-800 z-50">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-12">
            <div className="text-3xl font-black text-red-500 tracking-tighter">RAP HUB</div>
            <div className="flex gap-8 text-sm uppercase tracking-widest">
              <a href="#" className="hover:text-white text-zinc-400">Главная</a>
              <a href="/search" className="hover:text-white text-zinc-400">Поиск</a>
              <a href="/library" className="hover:text-white text-zinc-400">Моя музыка</a>
            </div>
          </div>
          <input type="text" placeholder="Что послушать сегодня?" className="bg-zinc-900 border border-zinc-700 focus:border-red-500 w-96 py-3 px-6 rounded-3xl text-sm" />
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-zinc-700 rounded-full"></div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[620px] bg-black flex items-end">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 pb-16">
            <div className="uppercase text-red-500 text-sm tracking-[4px] mb-3">АРТИСТ НЕДЕЛИ</div>
            <h1 className="text-8xl font-black tracking-tighter mb-4">MZLFF</h1>
            <p className="text-xl text-zinc-400 max-w-md">Новая волна. Трап. Эмоциональный вайб.</p>
            <button className="mt-8 bg-red-600 hover:bg-white hover:text-black px-10 py-4 rounded-2xl text-lg font-semibold transition-all">▶ Слушать</button>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-8 py-12">
          <h2 className="text-3xl font-semibold mb-8">Популярные артисты</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {artists.map((a, i) => <ArtistCard key={i} {...a} />)}
          </div>
        </div>
      </div>

      <Player />
    </div>
  );
}