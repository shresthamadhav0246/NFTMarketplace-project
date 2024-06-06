import { Subscription } from "@/subscription";
import React from "react";

const subscription = () => {
  const subscriptions = [
    {
      title: "Starter",
      price: "$9.99/month",
      features: [
        "Access to exclusive NFT releases",
        "10% discount on transaction fees",
        "Basic customer support",
        "Priority customer support",
        "Monthly newsletter",
      ],
    },
    {
      title: "Basic",
      price: "$19.99/month",
      features: [
        "Access to exclusive NFT releases",
        "20% discount on transaction fees",
        "Priority customer support",
        "Monthly newsletter",
        "Priority customer support",
        "Monthly newsletter",
      ],
    },
    {
      title: "Plus",
      price: "$29.99/month",
      features: [
        "Access to exclusive NFT releases",
        "30% discount on transaction fees",
        "24/7 customer support",
        "Weekly newsletter",
        "Early access to new features",
        "Priority customer support",
        "Monthly newsletter",
      ],
    },
  ];

  return (
    <div>
      <Subscription subscriptions={subscriptions} />
    </div>
  );
};

export default subscription;
