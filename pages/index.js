import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import Link from "next/link";
// import Navbar from "../components/navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../components/layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  var name = "Divesh Rizal";
  return (
    <Layout home>
      <header className={styles.header}>
        <Image
          priority
          src="/images/profile.jpeg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div 
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/projects/">Projects</Nav.Link>
              <Nav.Link href="/likes/">Likes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
    </Layout>
  );
}
