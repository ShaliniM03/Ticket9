"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import cityImage from "@/images/city.png";
import Image from "next/image";
import SectionDowloadApp from "@/app/(home)/SectionDowloadApp";
import btnIosPng from "@/images/btn-ios.png";
import btnAndroidPng from "@/images/btn-android.png";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "",
    menus: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Event Magazine" },
      { href: "#", label: "Product Diary" },
    ],
  },
  {
    id: "1",
    title: "",
    menus: [
      { href: "#", label: "Conferences" },
      { href: "#", label: "Sports and Fitness" },
      { href: "#", label: "Workshops and Trainings" },
      { href: "#", label: "Entertainment Events" },
      { href: "#", label: "Festivals & Celebrations" },
      { href: "#", label: "Meetups and Reunions" },
    ],
  },
  {
    id: "2",
    title: "",
    menus: [
      { href: "#", label: "Pricing" },
      { href: "#", label: "How it works" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Refund Policy" },
      { href: "#", label: "Support / FAQs" },
    ],
  },
  // {
  //   id: "4",
  //   title: "Community",
  //   menus: [
  //     { href: "#", label: "Discussion Forums" },
  //     { href: "#", label: "Code of Conduct" },
  //     { href: "#", label: "Community Resources" },
  //     { href: "#", label: "Contributing" },
  //     { href: "#", label: "Concurrent Mode" },
  //   ],
  // },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />
      {/* <Image
        src={cityImage}
        alt="Design"
        height={250}
        className="object-"
      /> */}
      ;
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}

          <ul className="mt-5 space-y-4 space-x-4">
            <a href="##" target="_blank" rel="noopener noreferrer">
              <Image src={btnIosPng} alt="" width={120} />
            </a>
            <a href="##" target="_blank" rel="noopener noreferrer">
              <Image src={btnAndroidPng} alt="" width={120} />
            </a>
            {/* {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
