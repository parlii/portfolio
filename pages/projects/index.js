import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import BackToHome from "../../components/backToHome.js";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>RJ Interpreting App</Accordion.Header>
            <Accordion.Body>
              <p>
                Built a django-based web application for an interpreting company
                starting from cookie-cutter django as the boilerplate.
              </p>
              <p></p>Sends SMS messages via Twilio, emails via Mailgun and
              errors via Sentry. Integrations using python SDK. VM hosted in
              Azure, data at AWS RDS. CI/CD managed using docker-compose.
              <p></p>
              <a href="https://app.rojgarinterpreting.com/">
                Link to production!
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Repository of Nepali Music Artists
            </Accordion.Header>
            <Accordion.Body>
              This one hasn't been built yet. But heres the idea:
              <p></p>
              <p>
                Setup a db at AWS. Create lambda APIs to get/post/put/delete
                items. Serve list of artists, their albums, their songs.
              </p>
              <p>
                Write crawlers in python to search for Nepali artists across
                Nepali music websites. Clean the data and post on the above rds.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Map of weather stations in Nepal
            </Accordion.Header>
            <Accordion.Body>
              Another idea. Display a map of Nepal with markers for the various
              weather stations in Nepal.
              <p></p>
              https://opendatanepal.com/dataset/weather-station/
              <p>More data here:</p>
              <p>http://dhm.gov.np/meteorological-station/</p>
              <p></p>
              Would need to get Google Maps with the stations overlayed from the
              above data.
              <p></p>If possible, clicking on these weather stations would make
              api calls to get weather data from that station.
              <p></p>
              <a href="https://google.com">Work in progress..</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <BackToHome />
    </Layout>
  );
}
