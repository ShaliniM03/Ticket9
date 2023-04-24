import StartRating from "@/components/StartRating";
import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";

export interface PayPageProps {}

const PayPage: FC<PayPageProps> = () => {
  const renderContent = () => {
    return (
      <div className="w-full flex flex-col sm:rounded-2xl space-y-10 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Congratulations 🎉
        </h2>

        <div className="border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Your booking</h3>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex-shrink-0 w-full sm:w-40">
              <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
                <Image
                  fill
                  alt=""
                  className="object-cover"
                  src="https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
            </div>
            <div className="pt-5  sm:pb-5 sm:px-5 space-y-3">
              <div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                  The Half Brick – Raw Stories™ Women
                </span>
                <span className="text-base sm:text-lg font-medium mt-1 block">
                  Apr 31, 2023 • 2 PM
                </span>
              </div>
              <span className="block  text-sm text-neutral-500 dark:text-neutral-400">
                2 Hours
              </span>
              <div className="w-10 border-b border-neutral-200  dark:border-neutral-700"></div>
              <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="">Hosur</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------ */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Booking detail</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Booking code</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                #222-333-111
              </span>
            </div>
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Date</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                12 Aug, 2021
              </span>
            </div>
            <div className="flex text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Total</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                ₹199
              </span>
            </div>
            <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
              <span className="flex-1">Payment method</span>
              <span className="flex-1 font-medium text-neutral-900 dark:text-neutral-100">
                Credit card
              </span>
            </div>
          </div>
        </div>
        <div>
          <ButtonPrimary href="/">Explore more events</ButtonPrimary>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-PayPage`}>
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default PayPage;
