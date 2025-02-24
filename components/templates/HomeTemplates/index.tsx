"use client";

import { useState } from "react";
import HomeHeader from "../HomeHeader";
import HomeContent from "../HomeContent";
import Footer from "../Footer";
import SubscriptionModal from "@/components/organisms/SubscriptionModal";

const HomeTemplates = () => {
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
};

export default HomeTemplates;
