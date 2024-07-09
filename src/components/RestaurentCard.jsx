import React from 'react'
import {CDN_URL} from '../../utils/contants';
import { useContext } from 'react';
import userContext from '../../utils/userContext';


const RestaurentCard = (props) => {
  const {loggedInUser}=useContext(userContext)
    const { resData } = props;
    const { name , cuisines , avgRatingString , sla , costForTwo, cloudinaryImageId,aggregatedDiscountInfoV3}=resData?.info
    const { slaString }=sla

  
  // ********************************************************************************************************
  
    return (
      <div className=' w-fit h-fit  rounded-lg px-1 py-1 shadow-2xl'>
        <img className=' w-56 h-56 rounded-md'
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Chicken Briyani"
        />
        <div className="res-card-text">
          <div className=' w-56 h-14'>
            <h3 style={{ fontWeight: "bold" }}>
              {name}
            </h3>
          </div>
          {/*  (3) */}
          <div className=' w-56 h-16'>
            <h4 style={{ fontSize: "medium", fontWeight: "normal" }}>
              {cuisines.join(" . ")}
            </h4>
          </div>

          <div
            className=' text-sm flex justify-between items-center w-56 h-20'>
            <span
              style={{
                alignContent: "center",
                backgroundColor: props.color,
                border: "1px solid transparent",
                paddingRight: "2px",
                borderRadius: "5px",
                color: "white",
              }}
            >
              ⭐ {avgRatingString}
            </span>
            <span>{slaString}</span>
            <span>{costForTwo}</span>
          </div>
          <hr />
          <h4 className='w-56 h-10 text' style={{ fontSize: "small", fontWeight: "bold", color: "brown" }}>
          💸🤑💰 {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
          </h4>
          <hr />
          <h5 className=' text-white bg-blue-600 rounded-md text-center py-1 hover:text-blue-600 hover:bg-white hover:font-bold'>QUICK VIEW</h5>
        </div>
      </div>
    );
  };


  // Higher Order Component - enhanced - with free delivery

  // input RestaurantCard - With Output is : Free Delivery

export const isOpen=(RestaurentCard)=>{
    return (props)=>{
      return(
        <div>
            <label className=' absolute bg-black text-white px-1 rounded-md'>Open Now ...</label>
            <RestaurentCard {...props}/>
        </div>
      )
    }
  }


export default RestaurentCard
