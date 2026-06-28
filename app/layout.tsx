import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rap Hub',
  description: 'Стриминг русской рэп-музыки',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
