// layout.tsx
import Header from './components/header';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
