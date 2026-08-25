import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homepage />
    </div>
  );
}
