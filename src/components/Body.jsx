import React, { useEffect } from "react";
import RestaurentCard, {isOpen} from "./RestaurentCard";
import { useState } from "react";
import ButtonCard from "./ButtonCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import cat from "../../cat-pictures.jpg";
import { useContext } from "react";
import userContext from "../../utils/userContext";

const Body = () => {
  // **************************************State Variable - Super Powerful Variable************************
  const {setUserName , loggedInUser}=useContext(userContext)
  const [listOfRestaurents, setlistOfRestaurent] = useState([]);
  const [resList, setresList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResOpen=isOpen(RestaurentCard)      // has label isOpen

  // Whenever state variables update react triggers a reconciliation cycle or may be React re-renders the component.
  console.log(listOfRestaurents)

  useEffect(() => {
    fetchData();
  }, []);

  // -----------------------------------------To get Data from Swiggy API------------------------------------------------------------------------

  async function fetchData() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();

    // Useeffect
    // Load--render-Api call-render again
    // when doing setlistOfRestaurent if Restaurent afterAPi call updates the Listofrestaturant

    // Whenever state variables update react triggers a reconciliation cycle or may be React re-renders the component.

    setlistOfRestaurent(
      jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants // Optional Chaining
    );
    setresList(
      jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className=" flex flex-col justify-center items-center">
        <img src={cat} alt="" />
        <span style={{ fontStyle: "italic", fontWeight: "500" }}>
          Looks Like your Internet Connection is week
        </span>
      </div>
    );

  // -----------------------------------------To get Data from Swiggy API------------------------------------------------------------------------

  // Conditional Rendering - Rendering on the basis of Rendering

  // if (listOfRestaurents.length===0) {
  //   return <Shimmer/>
  // }

  // -----------------------------------------To get Data from Swiggy API------------------------------------------------------------------------

  return listOfRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" flex flex-col gap-10 mt-40">
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-xl" style={{ fontWeight: "bold" }}>
              1787 Restaurants
            </h1>
          </div>

          <div>
            <ul className=" flex gap-9">
              <li>Relevance</li>
              <li>Delivery Time</li>
              <li>Rating</li>
              <li>Cost: Low to High</li>
              <li>Filters</li>
            </ul>
          </div>
        </div>
        <hr />

        <div className=" flex flex-row gap-2">
          <input
            className=" outline-none w-56 border-black border-2 border-solid rounded-md"
            type="text"
            placeholder="Enter the Restaurent Name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          {/*// bind Input box*/}
          <button
            className=" bg-blue-600 text-white px-2 py-1 rounded-md"
            onClick={() => {
              // Filter the Restaurent cards and update the UI
              // Search Text

              // console.log(searchText)
              const filteredRest = resList.filter((items) => {
                return items.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }); /*// Filter*/
              // console.log(filteredRest)
              setlistOfRestaurent(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        {/* // ************************************************* ButtonCard ****************************************************************** */}

        <div className=" flex justify-start gap-5">
          <ButtonCard
            resData={resList}
            Ratings={"3.8"}
            rating={"⭐ 3.8+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"3.9"}
            rating={"⭐ 3.9+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4"}
            rating={"⭐ 4.0+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4.1"}
            rating={"⭐ 4.1+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4.2"}
            rating={"⭐ 4.2+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4.3"}
            rating={"⭐ 4.3+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4.4"}
            rating={"⭐ 4.4+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <ButtonCard
            resData={resList}
            Ratings={"4.5"}
            rating={"⭐ 4.5+"}
            listOfRestaurents={listOfRestaurents}
            setlistOfRestaurent={setlistOfRestaurent}
          />
          <label>UserName:</label><input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} className=" outline-none border-solid border-2 border-black rounded-md"/>
        </div>
      </div>
      {/* // ********************************************************************************************************************************** */}

      {/* ******************************************************** Map ************************************************************ */}

      {/* // not using Key (not acceptable)<<<< index as key <<<<<< unique id (best practice) */}

      <div className=" flex flex-wrap gap-8 justify-between">
        {listOfRestaurents.map((items) => {
          return (
            <div className=" flex flex-col" key={items?.info?.id}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={items?.info?.id}
                to={`/restaurants/${items?.info?.id}`}
              >
                {
                  items?.info?.isOpen ? (<ResOpen resData={items} color="green"/>):(<RestaurentCard resData={items} color="green" />)
                }
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
