import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.image}>
          <a href='/'>
            <Image src="/quadradoNavbar.png" width={80} height={50} />
          </a>
        </div>
        <Link href="/">
          <a className={styles.a}>Principal</a>
        </Link>
        <Link href="/About">
          <a className={styles.a}>Sobre nós</a>
        </Link>
        <Link href="/Manual">
          <a className={styles.a}>Manual de instruções</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
