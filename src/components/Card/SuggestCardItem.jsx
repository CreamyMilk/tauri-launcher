import React from 'react'

const SuggestCardItem = ({ title, category, imgSrc, price, discountedPrice, discountPercent }) => {
    return (
        <div className="mb-14 mt-6 w-52 h-72">
            <img className="w-52 h-72 mb-4" src={imgSrc} alt="bottomBanner1" />
            <h4 className="text-sm mb-1.5">{ title }</h4>
            <h4 className="text-sm text-black-medium mb-1.5">{ category }</h4>
            <div>
                {discountedPrice && (
                    <>
                        <span className="text-sm bg-green-600 dark:text-green p-1 rounded-lg mr-3">{discountPercent}%</span>
                        <span className="text-sm dartext-black mr-4">${discountedPrice}</span>
                    </>
                )}

                <span className="text-sm ">${price}</span>
            </div>
        </div>
    )
}

export default SuggestCardItem
