import Image from "next/image";
import styles from "../app/page.module.css";

const servicesData = [
  {
    id: 1,
    title: "Performance Upgrades",
    description:
      "Enhance your vehicle's power and handling with our premium performance modifications.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Custom Interiors",
    description:
      "Transform your interior with premium materials, custom steering wheels, and racing accessories.",
    icon: "🏎️",
  },
  {
    id: 3,
    title: "Exterior Styling",
    description:
      "Stand out with body kits, custom paint, wraps, and aerodynamic enhancements.",
    icon: "✨",
  },
  {
    id: 4,
    title: "Suspension & Wheels",
    description:
      "Lower your ride height and improve handling with our suspension packages and custom wheels.",
    icon: "🔧",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <h2>Our Customization Services</h2>
        <p>
          We specialize in creating unique, high-performance custom vehicles
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.serviceImages}>
        <div className={styles.serviceImageContainer}>
          <Image
            src="/sparco-interior.jpg"
            alt="Custom Interior"
            width={400}
            height={300}
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.serviceImageContainer}>
          <Image
            src="/blue-subaru-brz.jpg"
            alt="Custom Exterior"
            width={400}
            height={300}
            className={styles.serviceImage}
          />
        </div>
      </div>
    </section>
  );
}
