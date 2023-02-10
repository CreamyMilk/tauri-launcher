import React from "react";

const SuggestCardItem = ({
  title,
  category,
  imgSrc,
  price,
  discountedPrice,
  discountPercent,
}) => {
  return (
    <div>
      <img className="w-52 h-72 mb-4" src={imgSrc} alt="bottomBanner1" />
      <h4 className="text-xl mb-1.5">{title}</h4>
      <h4 className="text-black-medium mb-1.5">{category}</h4>
      <div>
        {discountedPrice && (
          <>
            <span className="text-lg bg-green-600 dark:text-green p-1 rounded-lg mr-3">
              {discountPercent}%
            </span>
            <span className="text-lg dartext-black mr-4">
              ${discountedPrice}
            </span>
          </>
        )}
        <span className="text-lg">${price}</span>
      </div>
    </div>
  );
};

export default SuggestCardItem;
