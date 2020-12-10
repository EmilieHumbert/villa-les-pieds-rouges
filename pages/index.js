import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Villa les pieds rouges</title>
      </Head>
      <main className={styles.main}>
        
        <div>Villa les pieds rouges</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
