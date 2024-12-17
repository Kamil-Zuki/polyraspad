// layout.tsx
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar/>
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
