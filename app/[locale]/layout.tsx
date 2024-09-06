import '@/assets/app.css';
import { irsans } from '@/assets/font';
import { SiteFooter } from '@/components/footer';
import { SiteHeader } from '@/components/header';
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
  openGraph: {
    title: 'Soheil Ghanbary | سهیل قنبری',
    description: 'Full Stack Web Developer',
  },
  twitter: {
    title: 'Soheil Ghanbary | سهیل قنبری',
    description: 'Full Stack Web Developer',
  },
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
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="U1Ry9cck2_sR-yw1BDIa31FxvYJ0fuT7cl-2g-l_7Oo"
        />
      </head>
      <body className={locale === 'en' ? font.className : irsans.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            <main className="container mx-auto p-4">{children}</main>
            <SiteFooter />
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
