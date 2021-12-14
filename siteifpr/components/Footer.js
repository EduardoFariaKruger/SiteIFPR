import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src="/images/blocksUpSide.png" width={80} height={80} /></div>
      <div>
        <h1>
          <p className={styles.infosFooter}>Endereço do Campus</p>
        </h1>
        <h2 className={styles.textInfos}>
          <p2>
            Instituto Federal do Paraná, Campus Colombo.<br />
            Rua Antônio Chemin, 80<br />
            Roça Grande<br />
            83403515 - Colombo, PR - Brasil<br />
            Telefone: (41) 36755088
          </p2>
        </h2>
      </div>
      <div style={{ marginLeft: 30, marginRight: 30}}>
        <h1>
          <p className={styles.infosFooter}>Sobre Nós</p>
        </h1>
        <h2>
          <p2 className={styles.textInfos}>
            Somos alunos do instituto Federal e vlw vlw
          </p2>
        </h2>
      </div>
      <div style={{ marginLeft: 30, marginRight: 30}}>
        <h1>
          <p className={styles.infosFooter}>Contato</p>
        </h1>
        <h2>
          <Image src="/images/gmail.png" width={20} height={15} />
          <p2 className={styles.textInfos}>
            compsolidario@gmail.com
          </p2>
        </h2>
      </div>
      <div className={styles.down}>
        <Image src="/images/blocksDownSide.png" width={110} height={55} />
      </div>
    </footer>
  );
};

export default Footer;