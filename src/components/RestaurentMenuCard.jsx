import React from "react";
import { CDN_URL } from "../../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { removeItem } from "../../utils/cartSlice";
import { clearItem } from "../../utils/cartSlice";

const RestaurentMenuCard = (props) => {
  const { resData } = props;

  const dispatch=useDispatch()

  const handleAddItem=(resData)=>{
    // Dispatch an action
    dispatch(addItem(resData))

  }

  const handleRemoveItem=(resData)=>{
    // Dispatch an action
    dispatch(removeItem(resData))

  }

  const handleClearItems=(resData)=>{
    // Dispatch an action
    dispatch(clearItem(resData))
  }

  // ********************************************************************************************************
  return (
    <div>
      {
        // Name, rating, price,Description,Image

        <div className="dishes-recommended-food">
          <div className=" flex justify-between py-4">
            
            <div className=" flex flex-col gap-10 w-1/2">
              <h3 className=" font-bold text-lg">
                {resData?.card?.info?.name}
              </h3>
              <span className=" text-lg" style={{ fontWeight: "bold" }}>
                ₹{" "}
                {isNaN(resData.card.info.defaultPrice / 100)
                  ? resData.card.info.price / 100
                  : resData.card.info.defaultPrice / 100}
              </span>
              <span className=" text-lg" style={{ fontWeight: "bold" }}>
                ⭐ {resData.card.info.ratings.aggregatedRating.rating} (
                {resData.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
              <span className=" text-lg" style={{ fontFamily: "serif" }}>
                {resData.card.info.description}
              </span>
            </div>

            <div className=" w-44 h-fit flex flex-col gap-2">
              <img
                className=" w-44 h-44 rounded-md"
                src={CDN_URL + resData.card.info.imageId}
                alt="Crispy delights"
              />
              <div className=" flex gap-2 absolute mt-40 ml-8">
              <button className=" text-white bg-green-800 rounded-lg px-3 py-1 shadow-lg  font-bold" 
              onClick={()=>handleAddItem(resData)}>
                Add
              </button>
              <button className=" text-white bg-red-700 rounded-lg px-3 py-1 shadow-lg  font-bold" 
              onClick={()=>handleRemoveItem(resData)}>
                Del
              </button>
              </div>
              <button className=" bg-black text-white py-1 rounded-md mt-3" onClick={()=>handleClearItems(resData)}>Clear Cart</button>
            </div>

          </div>
          <hr />
        </div>
      }
    </div>
  );
};

export default RestaurentMenuCard;
