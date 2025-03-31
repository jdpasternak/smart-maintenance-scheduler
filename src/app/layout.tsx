import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Smart Maintenance Scheduler',
  description:
    'Streamline your equipment maintenance with Smart Maintenance Scheduler — a modern web app to manage machines, track service intervals, and log completed maintenance for small industrial teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
