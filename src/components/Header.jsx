import React, { useState, useContext } from 'react'
import logo from '../../instant.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import userContext from '../../utils/userContext';
import joseph from '../../joseph.png';
import { useSelector } from 'react-redux';



const Header = () => {

  const {loggedInUser}=useContext(userContext)

  const[btn,setbtn]=useState(["Login"])     // Creates a new instance with the updated value of setValue  

  const onlineStatus=useOnlineStatus()

  // Selector / Hook
  // Subscribing to store using selector
  const cartItems=useSelector((store)=>store.cart.items)                             // give access to store  // Reading the Data (items[] from CartSlice)
  console.log(cartItems)

    return (
      <div className=' flex justify-between items-center shadow-lg flex-wrap max-w-full overflow-hidden '>

        <div className="logo-container">
          <img
            className=' w-40'
            src={logo}
            alt="Tomato Classic"
          />
        </div>

        <div>
          <ul className=' flex justify-center items-center p-4 gap-4'>
            <li> {onlineStatus?("🟢"):("🔴")}</li>
            <li><Link style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to={"/about"}>About</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to={"/contact"}>Contact</Link></li>
            <li><Link style={{textDecoration:"none",color:"black"}} to={"/grocery"}>InstaMart</Link></li>
            <li className=' font-bold'><Link style={{textDecoration:"none",color:"black"}} to={"/cart"}> <span>🛒</span> <span >({cartItems.length})</span></Link></li>
            <li>Hi {loggedInUser } !</li>
            <img src={joseph} alt="" className=' w-8 h-8 rounded-full' />

            <button className=' bg-yellow-300 px-3 py-1 rounded-md' onClick={()=>{
                btn==="Login"?(setbtn("Logout")):(setbtn("Login"))}}>{btn}</button>
          </ul>
        </div>

      </div>
    );
  };

export default Header
