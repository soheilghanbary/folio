import '@/assets/app.css';
import { irsans } from '@/assets/font';
import { SiteFooter } from '@/components/footer';
import { SiteHeader } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

const font = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Soheil Ghanbary | سهیل قنبری',
  description: 'Full Stack Web Developer',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <body className={locale === 'en' ? font.className : irsans.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            <main className="container mx-auto p-4">{children}</main>
            <SiteFooter />
            <Navigation />
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
