import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <app>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            Lorem Ipsum
            <br />
            lorem ipsum
            <br />
            Lorem ipsum
          </strong>
        </h1>
      </div>
    </app>
  );
}
