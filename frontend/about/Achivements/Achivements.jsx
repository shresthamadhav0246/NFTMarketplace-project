// components/Achievements.js
import styles from "./Achievements.module.css";

function Achievements() {
  return (
    <div className={styles.container}>
      <h2>Our Achievements</h2>
      <ul>
        <li>Over $5 million in artist sales within the first year.</li>
        <li>Partnership with major digital art museums and galleries.</li>
        <li>Launch of a mobile app that increased user engagement by 50%.</li>
      </ul>
    </div>
  );
}

export default Achievements;
