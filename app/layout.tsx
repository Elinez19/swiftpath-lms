import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BackToTopButton from '@/components/common/BackToTop';
import { Provider } from 'react-redux';
import AppProvider from '@/contextApi/AppProvider';
import ReduxProvider from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MySkillsRoot - Online Learning Platform',
  description: 'Discover and learn new skills with our expert-led courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ReduxProvider>
        <AppProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <BackToTopButton />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AppProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
