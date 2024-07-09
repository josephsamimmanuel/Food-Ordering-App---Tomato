// Restaurant Category
// Accordian Header
// Accordian body
// Item List

import React from "react";
import RestaurentMenuCard from "./RestaurentMenuCard";

const CategoryList = ({itemCategory,showItems,handleCategoryClick,index,}) => {

  return (
    <>
    {/* // Restaurant Menu Category */}
        <div className="flex flex-col">
          {itemCategory.map((i) => (
            <div key={i?.card?.info?.id}>
                <span className=" text-lg font-bold">({itemCategory.length})</span>
                <RestaurentMenuCard resData={i} key={i?.card?.info?.name}/>
            </div>
          ))}
        </div>
    </>
  );
};

export default CategoryList;
