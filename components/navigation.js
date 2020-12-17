import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="bg-gray-100 border-b border-red-900 space-x-4 mb-4">
      <Link href="/">
        <a class="font-medium text-3xl text-red-900 ">
          Villa les pieds rouges
        </a>
      </Link>{" "}
      <Link href="/gallery">
        <a class="hover:text-gray-900 text-gray-500 text-lg">
          Gallery
        </a>
      </Link>{" "}
      <Link href="/plans">
        <a class="hover:text-gray-900 text-gray-500 text-lg">
          Plans
        </a>
      </Link>{" "}
      <Link href="/about">
        <a class="hover:text-gray-900 text-gray-500 text-lg">
          About
        </a>
      </Link>{" "}
      <Link href="/contact">
        <a class="hover:text-gray-900 text-gray-500 text-lg">
          Contact
        </a>
      </Link>
    </nav>
  );
}
