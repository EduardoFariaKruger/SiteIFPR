import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.teste}>
          <Link href="About">
            <a className={styles.icon}>About</a>
          </Link>
          <Link href="/">
            <a className={styles.icon}>Home</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
