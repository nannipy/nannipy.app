import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nannipy.vercel.app'),
  title: {
    default: 'Nannipy - Portfolio',
    template: '%s | Giovanni Battista Pernazza',
  },
  description: 'Giovanni Battista Pernazza: Software Engineer, Developer, Entrepreneur',
  verification: {
    google: 'kJUIQCIwNWnDtwEV658OTfsyg68KzpmVixVQbDE1LnI',
  },
  openGraph: {
    title: 'Nannipy - Portfolio',
    description: 'Giovanni Battista Pernazza: Software Engineer, Developer, Entrepreneur',
    url: 'https://nannipy.vercel.app',
    siteName: 'Giovanni Battista Pernazza',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://nannipy.vercel.app/images/meta-tags.png',
        width: 1200,
        height: 630,
        alt: 'Nannipy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nannipy - Portfolio',
    description: 'Giovanni Battista Pernazza: Software Engineer, Developer, Entrepreneur',
    images: ['https://nannipy.vercel.app/images/meta-tags.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  applicationName: 'Giovanni Battista Pernazza',
  creator: 'Giovanni Battista Pernazza',
  keywords: [
    'Giovanni Battista Pernazza',
    'developer',
    'entrepreneur',
    'portfolio',
    'software engineer',
  ],
  authors: [{ name: 'Giovanni Battista Pernazza' }],
  category: 'portfolio',
};