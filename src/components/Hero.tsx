import Image from "next/image";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Transform Your Vehicle</h1>
        <p>
          Custom vehicle modifications, performance upgrades, and premium
          accessories for automotive enthusiasts
        </p>
        <div className={styles.heroButtons}>
          <Link href="#services" className={styles.primaryBtn}>
            Our Services
          </Link>
          <Link href="#booking" className={styles.secondaryBtn}>
            Book a Consultation
          </Link>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/blue-subaru-brz.jpg"
          alt="Custom modified sports car"
          fill
          priority
          className={styles.mainHeroImage}
        />
      </div>
      <div className={styles.heroSmokeEffect}></div>
    </section>
  );
}
