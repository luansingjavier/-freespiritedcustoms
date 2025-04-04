import Image from "next/image";
import styles from "../app/page.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Premium Auto Customization</h1>
        <p>Transforming your vehicle into a personalized masterpiece</p>
        <div className={styles.heroButtons}>
          <a href="#services" className={styles.primaryBtn}>
            Our Services
          </a>
          <a href="#booking" className={styles.secondaryBtn}>
            Book a Consultation
          </a>
        </div>
      </div>
      <div className={styles.heroImageWrapper}>
        <Image
          src="/blue-subaru-brz.jpg"
          alt="Custom Subaru BRZ"
          width={1200}
          height={700}
          priority
          className={styles.mainHeroImage}
        />
      </div>
    </section>
  );
}
