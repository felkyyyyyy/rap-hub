export default function SearchPage() {
  return (
    <div className='pt-20 p-8 min-h-screen bg-zinc-950'>
      <h1 className='text-5xl font-bold mb-10'>Поиск</h1>
      <div className='max-w-xl'>
        <input 
          type='text' 
          placeholder='Артисты, треки, альбомы...' 
          className='w-full bg-zinc-900 border border-zinc-700 rounded-2xl py-4 px-6 text-lg focus:outline-none focus:border-red-500'
        />
      </div>
    </div>
  );
}