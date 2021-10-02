import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
