import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rap Hub - Русский Рэп',
  description: 'Новая школа русского рэпа',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}