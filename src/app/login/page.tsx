import React, { FC } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

export interface PageLoginProps {}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({}) => {
  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="mt-20 mb-8 flex items-center text-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <text className="text-sm mb-12 flex justify-center">
          Please login with your phone number
        </text>
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              {/* <span className="text-neutral-800 dark:text-neutral-200">
                Mobile
              </span> */}
              <Input
                type="number"
                placeholder="Mobile Number"
                className="mt-1"
              />
            </label>

            <ButtonPrimary type="submit" href="/verify-otp">
              Send OTP
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
