import Link from "next/link";

export default function Navigation() {
  return (
    <nav class="bg-gray-50">
      <Link href="/">
        <a>Villa les pieds rouges</a>
      </Link>{" "}
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>{" "}
      <Link href="/plans">
        <a>Plans</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
}
