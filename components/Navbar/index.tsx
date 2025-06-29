import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              O mně
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Ceník
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
