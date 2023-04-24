"use client";

import { Tab } from "@headlessui/react";
import CarCard from "@/components/CarCard";
import ExperiencesCard from "@/components/ExperiencesCard";
import StayCard from "@/components/StayCard";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "@/data/listings";
import React, { Fragment, useState } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import EventCard from "@/components/EventCard";

const AccountSavelists = () => {
  let [categories] = useState(["Stays", "Experiences", "Cars"]);

  const renderSection1 = () => {
    return (
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h2 className="text-3xl font-semibold">Wishlist</h2>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DEMO_STAY_LISTINGS.filter((_, i) => i < 8).map((stay) => (
              <EventCard key={stay.id} data={stay} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return renderSection1();
};

export default AccountSavelists;
