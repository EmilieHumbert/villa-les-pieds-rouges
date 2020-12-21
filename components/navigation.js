import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="space-x-4 mb-4 pl-10 pt-20 pr-10 pb-20">
      <Link href="/">
        <a className="font-medium text-3xl text-red-900 ">
          Villa les pieds rouges
        </a>
      </Link>{" "}
      <Link href="/gallery">
        <a className="text-lg">
          Gallery
        </a>
      </Link>{" "}
      <Link href="/plans">
        <a className="text-lg">
          Plans
        </a>
      </Link>{" "}
      <Link href="/about">
        <a className="text-lg">
          About
        </a>
      </Link>{" "}
      <Link href="/contact">
        <a className="text-lg">
          Contact
        </a>
      </Link>
    </nav>
  );
}
