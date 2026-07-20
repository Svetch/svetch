import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import type { ReactNode } from 'react';

import appCss from '../styles/app.css?url';

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Svetch | Fullstack developer' },
      {
        name: 'description',
        content:
          'I am a fullstack developer with a passion for web development.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: publicAsset('apple-touch-icon.png'),
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: publicAsset('favicon-32x32.png'),
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: publicAsset('favicon-16x16.png'),
      },
      { rel: 'icon', href: publicAsset('favicon.ico') },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
