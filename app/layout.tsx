import type { Metadata } from 'next';
import { Funnel_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shared/header';

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  variable: '--font-funnel-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  // SEO
  title: 'JapDrip | Japansk klädshop',
  description: 'Japansk klädshop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${funnelSans.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
