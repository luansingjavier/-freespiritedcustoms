import Link from "next/link";
import Image from "next/image";
import styles from "../app/page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/fsc-logo.jpg"
            alt="Free Spirited Customs Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#booking">Book a Call</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
