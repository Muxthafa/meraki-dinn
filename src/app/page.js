import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.primaryHeading}>Meraki</h1>
        <h2 className={styles.secondaryHeading}>Dinn</h2>
      </main>
    </div>
  );
}