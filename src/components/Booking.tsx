"use client";

import { useEffect } from "react";
import styles from "../app/page.module.css";

export default function Booking() {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className={styles.booking}>
      <div className={styles.sectionHeader}>
        <h2>Book a Consultation</h2>
        <p>
          Ready to customize your vehicle? Schedule a call with our experts to
          discuss your vision.
        </p>
      </div>

      <div className={styles.calendlyContainer}>
        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/luansingjavier/30min?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=ff3333&background_color=ffffff&text_color=000000&hide_event_type_details=1"
        />
      </div>

      <div className={styles.bookingInfo}>
        <h3>What to Expect</h3>
        <ul>
          <li>Discuss your customization goals and vision</li>
          <li>Get expert recommendations based on your vehicle</li>
          <li>Receive a custom quote for your project</li>
          <li>Learn about our process and timeline</li>
        </ul>
      </div>
    </section>
  );
}
