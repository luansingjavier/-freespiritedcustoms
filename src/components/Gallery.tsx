import Image from "next/image";
import styles from "../app/page.module.css";

const galleryImages = [
  {
    id: 1,
    src: "/blue-subaru-brz.jpg",
    alt: "Blue Subaru BRZ",
    width: 500,
    height: 350,
  },
  {
    id: 2,
    src: "/yellow-subaru-brz.jpg",
    alt: "Yellow Subaru BRZ",
    width: 500,
    height: 350,
  },
  {
    id: 3,
    src: "/steering-wheel-custom.jpg",
    alt: "Custom Steering Wheel",
    width: 500,
    height: 350,
  },
  {
    id: 4,
    src: "/subaru-logo.jpg",
    alt: "Custom Subaru Emblem",
    width: 500,
    height: 350,
  },
  {
    id: 5,
    src: "/sparco-accessories.jpg",
    alt: "Sparco Accessories",
    width: 500,
    height: 350,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.sectionHeader}>
        <h2>Our Custom Projects</h2>
        <p>A glimpse of our passion for automotive excellence</p>
      </div>

      <div className={styles.galleryGrid}>
        {galleryImages.map((image) => (
          <div key={image.id} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
