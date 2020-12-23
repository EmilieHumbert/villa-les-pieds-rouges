import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center px-10 py-20 space-x-10">
      <Link href="/">
        <a className="font-medium text-3xl text-red-900">
          Villa<br />
          les<br />
          pieds rouges
        </a>
      </Link>{" "}
      <Link href="/plans">
        <a className="text-lg flex flex-wrap content-center">Plans</a>
      </Link>{" "}
      <Link href="/about">
        <a className="text-lg flex flex-wrap content-center">About</a>
      </Link>{" "}
      <Link href="/contact">
        <a className="text-lg flex flex-wrap content-center">Contact</a>
      </Link>
    </nav>
  );
}
