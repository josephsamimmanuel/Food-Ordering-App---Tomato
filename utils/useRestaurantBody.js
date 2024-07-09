// -------------------------------Own Custom Hook------------------------------------

// ------------------------------ Fetch Data ----------------------------------------

import { useEffect } from "react"
import { useState } from "react"
import { MENU_URL } from "./contants"

const useRestaurantBody=(restaurantId)=>{

    const [resInfo,setResInfo]=useState([])
    //fetchData
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData() {
        const data=await fetch(MENU_URL+restaurantId)
        const jsonValue=await data.json()
        setResInfo(jsonValue)
    }
    return resInfo
}
export default useRestaurantBody