import styles from "../app/page.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <h2>Contact Us</h2>
        <p>Have questions? Get in touch with our team of experts</p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email</h3>
            <p>
              <a
                href="mailto:info@freespiritedcustoms.com"
                className={styles.contactLink}
              >
                info@freespiritedcustoms.com
              </a>
            </p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3>Phone</h3>
            <p>
              <a href="tel:5551234567" className={styles.contactLink}>
                (555) 123-4567
              </a>
            </p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className={styles.socialContainer}>
          <h3>Connect With Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <div className={styles.socialIconCircle}>
                <span className={styles.socialIconText}>IG</span>
              </div>
              <span>Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <div className={styles.socialIconCircle}>
                <span className={styles.socialIconText}>FB</span>
              </div>
              <span>Facebook</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <div className={styles.socialIconCircle}>
                <span className={styles.socialIconText}>YT</span>
              </div>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
