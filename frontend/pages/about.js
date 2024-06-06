import React from "react";
import Head from "next/head";

import styles from "../styles/about.module.css"; // Adjust the path according to your file structure
import {
  Achievements,
  CommunityEngagement,
  FoundingStory,
  MissionValues,
  PlatformOverview,
  TeamMembers,
} from "@/about";
import { ContactInfo } from "@/contactpage";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us - Our Story</h1>
      <div className={styles.section}>
        <PlatformOverview />
      </div>
      <div className={styles.section}>
        <FoundingStory />
      </div>
      <div className={styles.section}>
        <TeamMembers />
      </div>
      <div className={styles.section}>
        <MissionValues />
      </div>
      <div className={styles.section}>
        <Achievements />
      </div>
      <div className={styles.section}>
        <CommunityEngagement />
      </div>
      <div className={styles.section}>
        <ContactInfo />
      </div>
    </div>
  );
}
