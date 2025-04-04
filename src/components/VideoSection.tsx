"use client";

import { useRef } from "react";
import styles from "../app/page.module.css";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={styles.videoSection}>
      <div className={styles.sectionHeader}>
        <h2>See Our Craftsmanship in Action</h2>
        <p>
          Watch how we transform ordinary vehicles into extraordinary custom
          masterpieces
        </p>
      </div>

      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster="/blue-subaru-brz.jpg"
          className={styles.customVideo}
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
