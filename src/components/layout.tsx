import { ReactNode } from 'react';
import { Footer } from './footer';
import { NavigationBar } from './navigation-bar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
