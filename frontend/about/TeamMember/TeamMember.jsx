// components/TeamMembers.js
import styles from "./TeamMembers.module.css";
import img from "../../img/madhab.jpg";
import Image from "next/image";

function TeamMembers() {
  return (
    <div className={styles.container}>
      <h2>Meet Our Team</h2>
      <div className={styles.memberList}>
        {/* Add team members here */}
        <div className={styles.member}>
          <Image width={100} height={100} src={img} alt="Founder Name" />
          <h3>Madhab Shrestha</h3>
          <p>Role and brief bio here.</p>
        </div>
        {/* Repeat for other team members */}
      </div>
    </div>
  );
}

export default TeamMembers;
