"use client";
import React, { FC } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import OtpInput from "react-otp-input";

import { useState } from "react";

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
  const [otp, setOtp] = useState("");
  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="mt-20 mb-8 flex items-center text-center text-3xl leading-[115%] md:text-3xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          OTP Verification
        </h2>
        <text className="text-sm mb-12 flex justify-center">
          Enter the OTP you received at +91 ******876
        </text>
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                One Time Password
              </span>
              {/* <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className="w-3"></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle="w-60 rounded-2xl"
                shouldAutoFocus={true}
              /> */}

              <Input type="number" placeholder="" className="mt-1" />
            </label>

            <ButtonPrimary type="submit" href="/">
              Verify OTP
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
