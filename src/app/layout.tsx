import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/scss/main.scss';
import { AppProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Portfolio',
  description: 'This is a dummy portfolio site in the form of a book',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
