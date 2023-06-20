import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"className="text-white font-bold text-xl">Blog  Hunter
        </Link>
        <div className="flex space-x-4">
          <Link href="/"className="text-white font-bold text-xl hover:text-white">Home
          </Link>
          <Link href="/allblogs"className="text-white font-bold text-xl hover:text-white">Blogs
          </Link>
          <Link href="/about"className="text-white font-bold text-xl hover:text-white">About
          </Link>
          <Link href="/contact"className="text-white font-bold text-xl hover:text-white">Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
