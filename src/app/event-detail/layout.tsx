"use client";

import BackgroundSection from "@/components/BackgroundSection";
import ListingImageGallery from "@/components/listing-image-gallery/ListingImageGallery";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";
import MobileFooterSticky from "../(listing-detail)/(components)/MobileFooterSticky";
import { imageGallery as listingStayImageGallery } from "./constant";
import { imageGallery as listingCarImageGallery } from "../(listing-detail)/listing-car-detail/constant";
import { imageGallery as listingExperienceImageGallery } from "../(listing-detail)/listing-experiences-detail/constant";

const DetailtLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const thisPathname = usePathname();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  const handleCloseModalImageGallery = () => {
    let params = new URLSearchParams(document.location.search);
    params.delete("modal");
    router.push(`${thisPathname}/?${params.toString()}`);
  };

  const getImageGalleryListing = () => {
    if (thisPathname?.includes("/event-detail")) {
      return listingStayImageGallery;
    }
    if (thisPathname?.includes("/listing-car-detail")) {
      return listingCarImageGallery;
    }
    if (thisPathname?.includes("/listing-experiences-detail")) {
      return listingExperienceImageGallery;
    }

    return [];
  };

  return (
    <div className="ListingDetailPage">
      {/* <ListingImageGallery
        isShowModal={modal === "PHOTO_TOUR_SCROLLABLE"}
        onClose={handleCloseModalImageGallery}
        images={getImageGalleryListing()}
      /> */}

      <div className="container ListingDetailPage__content">{children}</div>

      {/* OTHER SECTION */}
      <div className="container py-24 lg:py-32">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types"
            subHeading="Some content here"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>
        {/* <SectionSubscribe2 className="pt-24 lg:pt-32" /> */}
      </div>

      {/* STICKY FOOTER MOBILE */}
      <MobileFooterSticky />
    </div>
  );
};

export default DetailtLayout;
