'use client';

export default function ArtistCard({ name, image, slug }: { name: string; image: string; slug: string }) {
  return (
    <a href={`/artist/${slug}`} className="group block">
      <div className="aspect-square overflow-hidden rounded-3xl mb-4 shadow-xl">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
      </div>
      <h3 className="font-semibold text-xl text-center">{name}</h3>
    </a>
  );
}