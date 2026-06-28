export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-red-500">RAP HUB</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-red-500">Главная</a>
              <a href="#" className="hover:text-red-500">Поиск</a>
              <a href="#" className="hover:text-red-500">Библиотека</a>
            </div>
          </div>
          <div className="flex-1 max-w-md mx-8">
            <input type="text" placeholder="Поиск артистов, треков..." className="w-full bg-zinc-800 border border-zinc-700 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-red-500" />
          </div>
          <div>Профиль</div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="pt-20 relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/1920/1080')] bg-cover opacity-40"></div>
        <div className="relative z-10 text-center px-6">
          <div className="text-red-500 text-sm tracking-widest mb-4">АРТИСТ НЕДЕЛИ</div>
          <h1 className="text-7xl font-bold mb-6">MZLFF</h1>
          <p className="text-xl max-w-md mx-auto mb-8">Новая волна русского рэпа</p>
          <button className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full text-lg font-medium transition">Слушать сейчас</button>
        </div>
      </div>

      {/* Popular Artists */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Популярные артисты</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['MZLFF', 'Pharaoh', 'Скриптонит', 'Boulevard Depo', 'Oxxxymiron'].map((artist, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden mb-4 relative">
                <img src={`https://picsum.photos/id/${100 + i}/400/400`} className="w-full h-full object-cover group-hover:scale-105 transition" alt={artist} />
              </div>
              <div className="font-medium text-lg">{artist}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-700 p-4 flex items-center gap-4 z-50">
        <div className="w-12 h-12 bg-zinc-700 rounded"></div>
        <div className="flex-1">
          <div className="text-sm">Трек</div>
          <div className="text-xs text-zinc-400">Артист</div>
        </div>
        <div className="flex gap-6 text-2xl">
          ▶️ ⏸️ ⏭️
        </div>
        <div className="flex-1 h-1 bg-zinc-700 rounded-full relative">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
