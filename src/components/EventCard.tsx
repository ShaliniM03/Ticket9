import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import OnlineBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/solid";

export interface EventCardProps {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const EventCard: FC<EventCardProps> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    bedrooms,
    href,
    like,
    saleOff,
    isOnline,
    price,
    reviewStart,
    reviewCount,
    date,
    id,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full">
        <GallerySlider
          uniqueID={`StayCard2_${id}`}
          ratioClass="aspect-w-12 aspect-h-8"
          galleryImgs={galleryImgs}
          imageClass="rounded-lg"
          href={href}
        />
        <Badge name="Business" className="absolute left-3 top-3 z-[1]" />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
        {/* {isOnline && <OnlineBadge className="absolute left-3 top-3" />} */}
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={size === "default" ? "mt-3 space-y-2" : "mt-2 space-y-2"}>
        <div className="space-y-2">
          {/* <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {listingCategory.name}
          </span> */}
          <div className="flex items-center space-x-2">
            {/* {isAds && <Badge name="ADS" color="green" />} */}
            <h2
              className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                size === "default" ? "text-base" : "text-base"
              }`}
            >
              <span className="line-clamp-1 w-40" data-tip="Hello">
                {title}
              </span>
            </h2>
          </div>
          {isOnline ? (
            <span className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
              <span className=" w-3 h-3 rounded-full bg-tone-green mr-1.5"></span>
              Online
            </span>
          ) : (
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
              {size === "default" && (
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
              )}
              <span className="">{address}</span>
            </div>
          )}
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          <div className="flex pb-[2px] ">
            <CalendarIcon className="w-[18px] h-[18px] text-green-600" />
            <span className="text-sm pl-1">{date}</span>
          </div>
          <Badge name="Free" className="" />
          {/* {!!reviewStart && (
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          )} */}
          {/* <div>
            {" "}
            {size === "default" && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                from
              </span>
            )}{" "}
            {` `}
            {price}
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={href}>{renderContent()}</Link>
    </div>
  );
};

export default EventCard;
