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
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

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
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button href="/projects/">Projects</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <p></p>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button href="/example/" variant="warning">
              Mess
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </section>
      <section className={utilStyles.headingMd}>
        <Nav
          variant="pills"
          defaultActiveKey="https://www.linkedin.com/in/divesh-rizal-4b552673/"
          className="justify-content-center"
        >
          <Nav.Link href="https://github.com/parlii">Github</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/divesh-rizal-4b552673/">
            LinkedIn
          </Nav.Link>
        </Nav>
      </section>
    </Layout>
  );
}
