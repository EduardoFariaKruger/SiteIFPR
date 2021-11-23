import Head from "next/Head";
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <body>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
      </div>
    </body>
  );
};

export default About;
