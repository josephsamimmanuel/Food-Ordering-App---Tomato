import React from 'react'
import RestaurentCard from './RestaurentCard';
import resList from '../../utils/mockData';
import { useState } from 'react';
import ButtonCard from './ButtonCard';


const Body = () => {

// **************************************State Variable - Super Powerful Variable************************

    const[listOfRestaurents,setlistOfRestaurent]=useState(resList)
    const indices=Array.from({length:11},(_,i)=>i+2)

// **************************************State Variable - Super Powerful Variable************************


// **************************************Normal JS Variable***********************************************
    // let listOfRestaurentsJ=[]
    // let listOfRestaurentsJS=[
    //     {
    //         info: {
    //           id: "748065",
    //           name: "KFC",
    //           cloudinaryImageId: "f8d6dce1f40b3e14ff83948a0d0f4b32",
    //           costForTwo: "₹350 for two",
    //           cuisines: ["Burgers", "American"],
    //           avgRating: 3.8,
    //           avgRatingString: "3.8",
    //           sla: {
    //             slaString: "25-30 mins",
    //           },
    //         },
    //       },
    //       {
    //         info: {
    //           id: "748066",
    //           name: "Dominos",
    //           cloudinaryImageId: "f8d6dce1f40b3e14ff83948a0d0f4b32",
    //           costForTwo: "₹350 for two",
    //           cuisines: ["Burgers", "American"],
    //           avgRating: 4.5,
    //           avgRatingString: "4.5",
    //           sla: {
    //             slaString: "25-30 mins",
    //           },
    //         },
    //       },
    //       {
    //         info: {
    //           id: "748055",
    //           name: "McDonalds",
    //           cloudinaryImageId: "f8d6dce1f40b3e14ff83948a0d0f4b32",
    //           costForTwo: "₹350 for two",
    //           cuisines: ["Burgers", "American"],
    //           avgRating: 4.1,
    //           avgRatingString: "4.1",
    //           sla: {
    //             slaString: "25-30 mins",
    //           },
    //         },
    //       },
    // ]

// **************************************Normal JS Variable***********************************************
    return (
      <div className="Body">
        <div className="search">{/* <p>Search</p> */}</div>
  
        <div className="Body-title">
          <div className="Body-title-left">
            <h3 style={{ fontWeight: "bold" }}>1787 restaurents</h3>
          </div>
  
          <div className="Body-title-right">
            <ul>
              <li>Relevance</li>
              <li>Delivery Time</li>
              <li>Rating</li>
              <li>Cost: Low to High</li>
              <li>Filters</li>
            </ul>
          </div>
        </div>
        <hr />

{/* // ************************************************* ButtonCard ****************************************************************** */}

        <div className="filter">
            
            <ButtonCard resData={resList} Ratings={"3.8"} rating={"⭐ 3.8+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"3.9"} rating={"⭐ 3.9+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4"} rating={"⭐ 4.0+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4.1"} rating={"⭐ 4.1+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4.2"} rating={"⭐ 4.2+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4.3"} rating={"⭐ 4.3+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4.4"} rating={"⭐ 4.4+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
            <ButtonCard resData={resList} Ratings={"4.5"} rating={"⭐ 4.5+"} listOfRestaurents={listOfRestaurents} setlistOfRestaurent={setlistOfRestaurent}/>
                
        </div>

{/* // ********************************************************************************************************************************** */}

{/* ******************************************************** Map ************************************************************ */}
  
  {/* // not using Key (not acceptable)<<<< index as key <<<<<< unique id (best practice) */}

      {
        indices.map((i)=>{
          return(
            <div className="res-container">
  
            {
              listOfRestaurents.map((items)=>{
                  return(<RestaurentCard key={items.info.id} resData={items} color="green"/>)
              })
            }
    
    {/* ******************************************************** Map ************************************************************ */}
    
          </div>
          )
        })
      }
      </div>
    );
  };

export default Body

