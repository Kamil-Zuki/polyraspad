// sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="bg-slate-900 w-48 min-h-screen p-4 text-white">
      <ul className="space-y-5 mt-3">
        <li>
          <Link href="/books" className="hover:text-gray-400 block">
            Books
          </Link>
        </li>
        <li>
          <Link href="/videos" className="hover:text-gray-400 block">
            Videos
          </Link>
        </li>
        <li>
          <Link href="/articles" className="hover:text-gray-400 block">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
