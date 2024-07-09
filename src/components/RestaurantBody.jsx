// Restaurant Menu

import React, { useState } from "react";
import CategoryList from "./CategoryList";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantBody from "../../utils/useRestaurantBody";
import RestaurantBoduName from "./RestaurantBoduName";


const RestaurantBody = () => {
  const { restaurantId } = useParams();
  const resInfo = useRestaurantBody(restaurantId);
  const [showItems, setShowItems] = useState([]);

  const dishes = resInfo?.data;
  const restaurant = resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCategory = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (items) =>
      items?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  const handleCategoryClick = (index) => {
      const newShowItems = [...showItems];
      newShowItems[index] = !newShowItems[index];
      setShowItems(newShowItems);

    console.log("clicked", index);
  };

  console.log(showItems);

  return itemCategory.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-2 mt-40">
      <RestaurantBoduName restaurant={restaurant} />

      <div>
        {itemCategory.map((items, index) => (
          <div
            key={items?.card?.card?.title}
            className="flex flex-col border-t-2 my-6 gap-6 border-gray-100 shadow-2xl"
          >
            <div className="flex flex-col justify-between py-1">
              <div className="flex justify-between" onClick={() => handleCategoryClick(index)}>
                {/* Heading Recommended */}
                <h3 style={{ fontSize: "x-large", fontWeight: "800" }}>
                  {items.card?.card?.title}
                </h3>
                <button className="bg-blue-700 text-white px-4 rounded-md">
                  {showItems[index] ? "Hide" : "Show"}
                </button>
              </div>

              {showItems[index] && (
                <CategoryList
                  itemCategory={items?.card?.card?.itemCards}
                  showItems={showItems}
                  handleCategoryClick={handleCategoryClick}
                  index={index}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantBody;
