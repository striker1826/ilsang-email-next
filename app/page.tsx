"use client";

import HomeHeader from "@/components/templates/HomeHeader";
import HomeContent from "@/components/templates/HomeContent";
import Footer from "@/components/templates/Footer";
import { useState } from "react";
import SubscriptionModal from "@/components/organisms/SubscriptionModal";

export default function Home() {
  const [subscriptionModal, setSubscriptionModal] = useState(false);

  const closeEvent = () => {
    setSubscriptionModal(false);
  };

  return (
    <>
      <HomeHeader setSubscriptionModal={setSubscriptionModal} />
      <HomeContent setSubscriptionModal={setSubscriptionModal} />
      <Footer />
      <SubscriptionModal isOpen={subscriptionModal} closeEvent={closeEvent} />
    </>
  );
}
