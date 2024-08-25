import './global.css';

export const metadata = {
  title: 'Svetch | Fullstack developer',
  description: 'I am a fullstack developer with a passion for web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body>{children}</body>
    </html>
  );
}
