import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8">
      <Link href="/">
        <h1 className="text-3xl font-bold">Next.js</h1>
      </Link>
      <nav>
        <div className="flex space-x-6 items-center">
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Profile">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
