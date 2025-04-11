import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import '@/app/globals.css';
import { SessionProvider } from 'next-auth/react';
import ErrorBoundary from '@/components/error-boundary';
import Layout from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';

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
        <SessionProvider>
          <ErrorBoundary>
            <Layout>{children}</Layout>
          </ErrorBoundary>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
