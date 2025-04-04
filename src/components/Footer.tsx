import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image
            src="/fsc-logo.jpg"
            alt="Free Spirited Customs Logo"
            width={60}
            height={60}
          />
          <p>Free Spirited Customs</p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerLinkColumn}>
            <h4>Services</h4>
            <a href="#services">Performance Upgrades</a>
            <a href="#services">Custom Interiors</a>
            <a href="#services">Exterior Styling</a>
            <a href="#services">Suspension & Wheels</a>
          </div>

          <div className={styles.footerLinkColumn}>
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <a href="#gallery">Gallery</a>
            <a href="#booking">Book a Call</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Free Spirited Customs. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
