"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();

  const listNav = [
    { name: "Profile", url: "/account" },
    { name: "Wishlist", url: "/account-wishlist" },

    { name: "Billing", url: "/account-billing" },
  ];

  return (
    <div className="container">
      <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
        {listNav.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link
              key={item.name}
              href={item.url}
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${
                isActive
                  ? "border-primary-500 font-medium"
                  : "border-transparent"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
