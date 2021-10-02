import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Alert from "../components/alert";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../components/layout.module.css";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hexagons() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        <Alert type="success">Success alert!</Alert>
        <Alert type="error">Error alert!</Alert>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <a>
          <Image
            priority
            src="/images/profile.jpeg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={name}
          />
        </a>
        <Row>
          <Col>
            <Button variant="dark">Show me!</Button>
          </Col>
          <Col>
            <Button variant="dark">Show me!</Button>
          </Col>
        </Row>
      </section>
    </Layout>
  );
}
