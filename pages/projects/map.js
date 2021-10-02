import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import BackToHome from "../../components/backToHome.js";
import Button from "react-bootstrap/Button";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import GMap from "../../components/map.js";

export default function Map() {
  return (
    <Layout gmap>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <GMap />
    </Layout>
  );
}
