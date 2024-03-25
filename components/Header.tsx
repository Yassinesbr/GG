import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href="/">
        <h1 className="text-3xl font-bold">Next.js</h1>
      </Link>
      <nav>
        <div className="flex space-x-4">
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
