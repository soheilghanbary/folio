import '@/assets/app.css';
import { SiteFooter } from '@/components/footer';
import { SiteHeader } from '@/components/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const font = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Soheil Ghanbary | سهیل قنبری',
  description: 'Full Stack Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main className="container mx-auto p-4">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
