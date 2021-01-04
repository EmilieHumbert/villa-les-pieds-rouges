import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex h-16 items-end mt-20 pt-10 pb-32 px-10 space-x-24">
      <Link href="/">
        <a className="font-black grid grid-rows-2 h-16 hover:text-red-800 text-3xl text-red-900 w-auto">
          <div>Villa </div>
          <div>les pieds rouges</div>
        </a>
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
