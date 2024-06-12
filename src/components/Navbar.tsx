import Link from 'next/link';

const MenuItem = ({ title, href }: { title: string, href: string }) => {
  return (
    <li className="p-1 m-1 text-center text-black shadow-md hover:bg-blue-700 hover:text-white rounded-md">
      <Link href={href} className="p-2">
				{title}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white border-b-2">
      <h1 className="text-2xl font-bold">
        <Link href="/">Note</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-3">
          <li className="relative group">
            <label htmlFor="menu1" className="p-2 text-black cursor-pointer rounded-md group-hover:bg-gray-50">
              Title1
            </label>
            <ul className="absolute hidden p-1 text-white bg-white border rounded-md top-[26px] group-hover:flex items-center justify-between min-w-full shadow-md">
              <MenuItem title="Notes" href="/notes" />
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
