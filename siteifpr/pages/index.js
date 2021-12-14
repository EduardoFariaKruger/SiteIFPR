import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <app>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div>
          <div className={styles.titleback}>
            <div className={styles.ballon}>
              <div>
                <strong className={styles.title}>
                  Conectando o acesso a educação a você!
                </strong>
                <Image
                  src="/images/titulo.svg"
                  width={17}
                  height={17}>
                </Image>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.titlerasp}>Placas Raspberry Pi</h1>
        </div>
        <div className={styles.body}>
          <div>
            <Image src="/images/blocoCima.png" width={80} height={80} /></div>
          <div className={styles.backrasp}>
            <p className={styles.textrasp} align="justify">
              Utilizamos placas Raspberry Pi para realizar o projeto <br />
              computador solidário, onde montaos kits para as escolas e <br />
              alunos; contendo nesses kits uma placa Raspberry Pi <br />modelo 4B,
              mouse, teclado, monitores e os adaptadores <br />externos para a
              experiência ser completa.
            </p>
          </div>
          <div className={styles.down}>
            <Image src="/images/blocoBaixo.png" width={80} height={80} />
          </div>
          <div className={styles.bodyimage}>
            <Image
              src="/images/placa.png"
              width={650}
              height={400}
            />
          </div>
        </div>
      </div>

    </app>
  );
}