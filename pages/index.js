import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <main>
        <div>Villa les pieds rouges</div>
        <div>
          {" "}
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
        </div>
        <div>
          <img
            src="/images/beach-view.jpeg"
            className={`${styles.mainImage}`}
            alt="beach-hossegor"
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
