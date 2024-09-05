import localFont from 'next/font/local';

export const irsans = localFont({
  src: [
    {
      path: './fonts/IRANSansX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/IRANSansX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iransans',
});
