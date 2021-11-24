import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.a}>Home</a>
        </Link>
        <Link href="/About">
          <a className={styles.a}>About</a>
        </Link>
        <Link href="/Manual">
          <a className={styles.a}>Manual</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
