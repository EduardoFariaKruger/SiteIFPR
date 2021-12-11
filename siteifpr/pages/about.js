import Head from "next/head";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <app>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
      </div>
    </app>
  );
};

export default about;
