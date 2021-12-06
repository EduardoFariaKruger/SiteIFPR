import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.image}>
          <a href='/'>
            <Image src="/images/quadradoNavbar.png" width={80} height={50} />
          </a>
        </div>
        <Link href="/">
          <a className={styles.a}>Principal</a>
        </Link>
        <Link href="/about">
          <a className={styles.a}>Sobre nós</a>
        </Link>
        <Link href="/manual">
          <a className={styles.a}>Manual de instruções</a>
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
