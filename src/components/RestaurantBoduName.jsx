// Restaurant Menu / Container

import React from 'react'

function RestaurantBoduName({restaurant}) {
  return (
    <div className=" flex flex-col justify-center items-center">
    <h3 className=" text-2xl font-bold border-solid border-r-red-600  border-l-lime-600  border-b-red-600 border-t-lime-600 border-2 rounded-lg">
      {restaurant?.name}
    </h3>
    <div className=" flex flex-col gap-6 p-10 rounded-md w-2/3 shadow-2xl">
      <div>
        <span className=" font-semibold">
          ⭐ {restaurant?.avgRatingString}{" "}
        </span>{" "}
        (
        <span className=" font-semibold">
          {restaurant?.totalRatingsString}
        </span>
        ) .
        <span className=" font-semibold">
          {restaurant?.costForTwoMessage}
        </span>
      </div>
      <span className=" font-semibold text-red-600">
        {restaurant?.cuisines.join(" . ")}
      </span>
      <div className=" flex flex-row gap-5">
        <span className=" font-semibold shadow-md">
          {restaurant?.areaName}
        </span>{" "}
        {"   "}
        <span className=" font-semibold shadow-md">
          {restaurant?.sla?.slaString}
        </span>
      </div>
      <hr />
      <span className=" font-semibold">
        🚀 {restaurant?.feeDetails?.message}
      </span>
    </div>
  </div>
  )
}

export default RestaurantBoduName
