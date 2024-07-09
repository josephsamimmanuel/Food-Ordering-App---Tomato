import React, { useEffect } from "react";
import { useState } from "react";

function User(props) {
    const [count,setCount]=useState(0)
    const [count2]=useState(1)
    const {name}=props

    useEffect(()=>{
      fetchData()                 // API calls
    },[])

    async function fetchData() {
      const data=await fetch("https://api.github.com/users/josephsamimmanuel")
      const jsonValue=await data.json()
    }

     

  return (
    <div className="user">
      <h3>Name: {name} {count} {count2}</h3>
      <p>Location: Tirunelveli, India</p>
      <p>contact: josesamimmanuel@gmail.com</p>
    </div>
  );
}

export default User;
