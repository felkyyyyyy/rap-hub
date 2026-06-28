'use client';

export default function Artist({ params }: { params: { slug: string } }) {
  const artistsData: any = {
    'mzlff': { name: 'MZLFF', bio: 'Один из самых ярких представителей новой школы.', facts: 'AI-факт: MZLFF часто экспериментирует с автотюном и trap-битами.' }
  };
  const data = artistsData[params.slug] || { name: params.slug.toUpperCase(), bio: 'Артист русской рэп-сцены.', facts: 'Генерировано Grok.' };

  return (
    <div className="min-h-screen bg-zinc-950 pt-20">
      <div className="h-[500px] bg-gradient-to-br from-red-950 to-black relative flex items-end">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover opacity-30"></div>
        <div className="relative z-10 p-10">
          <h1 className="text-8xl font-black tracking-tighter">{data.name}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-10 -mt-16 relative z-20">
        <div className="glass p-8 rounded-3xl mb-12">
          <h2 className="text-2xl mb-4">О артисте</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">{data.bio}</p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl mb-6 text-red-400">AI-факты</h3>
          <div className="text-zinc-400 italic">{data.facts}</div>
        </div>

        <h3 className="text-2xl font-semibold mb-6">Популярные треки</h3>
        <div className="space-y-4">
          {['Трек 1', 'Новый уровень', 'Smoke'].map((track, i) => (
            <div key={i} className="flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 p-5 rounded-2xl group">
              <div>{track}</div>
              <button className="opacity-0 group-hover:opacity-100 text-red-500">▶</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}