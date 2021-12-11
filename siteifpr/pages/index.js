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
        <div className={styles.titleback}>
          <div className={styles.left}>
            <h1>
              <strong className={styles.title}>
                Conectando o acesso a educação a você!
              </strong>
            </h1>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/titulo.svg"
              width={40}
              minHeight={5}
              minWidth={5}
              height={40}
            />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodytext}>
            <h1 style={{ fontSize: "2.5vw" }}>Placas Raspberry Pi</h1>
            <div className={styles.textrasp}>
              <p align="justify">
                Utilizamos placas Raspberry Pi para realizar o projeto
                computador solidário, onde montaos kits para as escolas e
                alunos; contendo nesses kits ums placa Raspberry Pi modelo 4B,
                mouse, teclado, monitores e os adaptadores externos para a
                experiência ser completa.
              </p>
            </div>
          </div>
          <div className={styles.bodyimage}>
            <Image
              src="/images/placa.png"
              width={625}
              minHeight={100}
              maxHeight={350}
              minWidth={150}
              maxWidth={625}
              height={350}
            />
          </div>
        </div>
      </div>
    </app>
  );
}
