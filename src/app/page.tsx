import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Services />
        <Gallery />
        <VideoSection />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
