import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.getcoinio.me'),
  title: { default: 'Coinio docs', template: '%s · Coinio docs' },
  description: 'Install, run and connect Coinio, the self-hosted subscription and bill tracker.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${jakarta.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
