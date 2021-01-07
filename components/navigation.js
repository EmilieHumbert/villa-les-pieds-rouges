import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-end justify-start mx-auto max-w-xl lg:max-w-4xl mt-20 mb-32 space-x-10 sm:space-x-18 lg:space-x-30">
      <Link href="/">
        <a className="font-black grid grid-rows-2 h-16 hover:text-red-800 text-3xl text-red-900 w-50">
          <div>Villa</div>
          <div>les pieds rouges</div>
        </a>
        </Link>{" "}
      <Link href="/">
        <a className="hover:text-gray-500 text-lg">Gallery</a>
      </Link>{" "}
      <Link href="/plans">
        <a className="hover:text-gray-500 text-lg">Plans</a>
      </Link>{" "}
      <Link href="/about">
        <a className="hover:text-gray-500 text-lg">About</a>
      </Link>{" "}
      <Link href="/contact">
        <a className="hover:text-gray-500 text-lg">Contact</a>
      </Link>
    </nav>
  );
}
