import React from 'react'

function ButtonCard(props) {  
   const restaurentList=props.listOfRestaurent  
   const setrestaurentList=props.setlistOfRestaurent
   const restList=props.resData

    return (
      <div>
        <button
          className=' text-white bg-green-700 rounded-md'

// ******************************************* Filter Logic ******************************************************
          
          onClick={() => {
            // filter Logic Here
            const filterResult = restList.filter((items) => {
              return items.info.avgRating > props.Ratings;
            });
            setrestaurentList(filterResult);

            console.log(filterResult);   
          }}

// ******************************************* Filter Logic ******************************************************

        >
          {props.rating}
        </button>
      </div>
    );
  }

export default ButtonCard
