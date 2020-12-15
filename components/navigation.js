import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="bg-gray-100 border-b border-red-900 space-x-4 mb-4">
      <Link href="/">
        <a class="hover:font-black text-lg text-red-900 ">
          Villa les pieds rouges
        </a>
      </Link>{" "}
      <Link href="/gallery">
        <a class="hover:font-black hover:text-gray-900 text-gray-500 text-sm">
          Gallery
        </a>
      </Link>{" "}
      <Link href="/plans">
        <a class="hover:font-black hover:text-gray-900 text-gray-500 text-sm">
          Plans
        </a>
      </Link>{" "}
      <Link href="/about">
        <a class="hover:font-black hover:text-gray-900 text-gray-500 text-sm">
          About
        </a>
      </Link>{" "}
      <Link href="/contact">
        <a class="hover:font-black hover:text-gray-900 text-gray-500 text-sm">
          Contact
        </a>
      </Link>
    </nav>
  );
}
