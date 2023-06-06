import ProvidersForTheme from './ProvidersForTheme';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
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
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ProvidersForTheme>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </ProvidersForTheme>
      </body>
    </html>
  );
}
