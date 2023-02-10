import React from "react";
import SuggestCardItem from "./SuggestCardItem";

const SuggestCard = () => {
  return (
    <main className="mt-12">
      <h4 className="text-xl">Games on sales</h4>
      <div className="flex flex-wrap items-center gap-6 w-full">
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.15"
          imgSrc="./images/bottomBanner1.png"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner2.png"
          discountedPrice="50"
          discountPercent="-80"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner3.png"
          discountedPrice="50"
          discountPercent="-80"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner4.png"
          discountedPrice="50"
          discountPercent="-80"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner5.png"
          discountedPrice="50"
          discountPercent="-80"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner2.png"
          discountedPrice="50"
          discountPercent="-80"
        />
        <SuggestCardItem
          title="Valheim"
          category="Action Games"
          price="8.67"
          imgSrc="./images/bottomBanner3.png"
          discountedPrice="50"
          discountPercent="-80"
        />
      </div>
    </main>
  );
};

export default SuggestCard;
