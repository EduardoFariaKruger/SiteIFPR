import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.image}>
          <Link href='/'>
            <Image src="/images/quadradoNavbar.png" width={80} height={50} />
          </Link>
        </div>
        <Link href="/" className={styles.a}>
         <text className={styles.a}>Principal</text>
        </Link>
        <Link href="/manual" style={{ margim: 50 }}>
         <text className={styles.a}>Manual de instruções</text>
        </Link>
      </div>
    </nav>
  );
}

export default navbar;
