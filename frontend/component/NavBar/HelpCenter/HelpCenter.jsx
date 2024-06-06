import React from "react";
import Link from "next/link";
import styles from "./HelpCenter.module.css"; // Import the CSS module for styling

const HelpCenter = () => {
  const helps = [
    {
      title: "Account Issues",
      link: "/contact",
      description: "Troubleshoot issues related to your account.",
    },
    {
      title: "Payment Problems",
      link: "/contact",
      description: "Get help with failed or incomplete transactions.",
    },
    {
      title: "Usage Tips",
      link: "/contact",
      description: "Learn how to make the most out of our platform.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Help Center</h2>
      <ul className={styles.list}>
        {helps.map((help, index) => (
          <li key={index} className={styles.item}>
            <Link href={help.link}>
              <p className={styles.link}>{help.title}</p>
            </Link>
            <p className={styles.description}>{help.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpCenter;
