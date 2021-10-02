import styles from "./backToHome.module.css";
import cn from "classnames";
import Link from "next/link";

export default function BackToHome({ children }) {
  return (
    <div className={styles.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );
}
