import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllFilesMetadata } from "./lib/mdx";
import styles from "../styles/Home.module.css";
import Icon from "./../public/assets/img/logo_ufps.png";

import Aboutme from "./components/Categories/Aboutme";
import Silux from "./components/Categories/SoftwareArquitecture";
import ReactCategorie from "./components/Categories/ReactCategorie";

export default function Home({ posts }) {
  const aboutme = posts.filter((post) => post.categorie === "about me");
  const silux = posts.filter(
    (post) => post.categorie === "silux"
  );
  const react = posts.filter((post) => post.categorie === "react");

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Blog UFPS</title>
        <meta
          name="description"
          content="Un blog creado a partir de mi conocimiento y estudio a lo largo de la vida"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={Icon}
          alt="Picture of the author"
          width={350}
          height={100}
        />
        <section className={styles.intro}>
          <p className={styles.paragraph}>
            Tu plataforma digital para la reproduccion social del conocimiento en ciencia, tecnologia y emprendimiento.
            En Fast Blog nos interesa el desarrollo tecnologico, economico y social de la region de norte de santander,
            es por eso que ponemos a dispocision de la comunidad todos estos temas de interes de forma abierta y gratuita.
            Fast Blog UFPS es un proyecto realizado 100% por talento UFPS<br />
          </p>
        </section>
        <section className={styles.containerCategories}>
          <Aboutme posts={aboutme} />
          <Silux posts={silux} />
          <ReactCategorie posts={react} />
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
};
