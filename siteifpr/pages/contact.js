import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}><h1 className={styles.title}>Contact</h1></div><div className={styles.right}><a href='/'><Image src='/placa.png' height={128} width={64}/></a></div>
    </div>
  );
};

export default contact;
