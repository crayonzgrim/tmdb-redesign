import ProvidersForTheme from './ProvidersForTheme';
import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'IMDb',
  description: 'IMDb clone for study nextJS',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersForTheme>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}
          {children}
        </ProvidersForTheme>
      </body>
    </html>
  );
}
