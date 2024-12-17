// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-1 pt-4 shadow-md">
      <div className="max-w-7xl ml-7 flex items-center">
        <h1 className="text-2xl font-bold"><Link href="/">Polyraspad</Link></h1>
      </div>
    </header>
  );
};

export default Header;
