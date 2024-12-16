// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link href="/">Polyraspad</Link></h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/books" className="hover:text-gray-400">Books</Link>
            </li>
            <li>
              <Link href="/movies" className="hover:text-gray-400">Movies</Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-gray-400">Articles</Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-gray-400">Videos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
