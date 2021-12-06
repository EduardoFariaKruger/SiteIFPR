import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";

const manual = () => {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          initialDoc: "/pdf/manual.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
      });
    });
  }, []);

  return (
    <div className={styles.manual}>
      <Head>
        <title>Manual</title>
      </Head>
      <div
        className={styles.webviewer}
        ref={viewer}
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
};

export default manual;
