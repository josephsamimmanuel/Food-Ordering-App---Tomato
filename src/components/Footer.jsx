import React, { useState } from 'react'
import logo from '../../instant.png'
import { FOOTER_URL } from '../../utils/contants';

function Footer() {
    const[btn,setbtn]=useState(["Login"])     // Creates a new instance with the updated value of setValue  
    return (
      <div className=' flex justify-between bg-black text-white flex-wrap py-10'>

        <div className="logo-container">
          <img className="w-56 h-56"
            src={FOOTER_URL}
            alt="Tomato Classic"
          />
        </div>
  
        <div className=' flex flex-col gap-4'>
            <h3 className=' text-lg font-semibold'>Company</h3>
            <ul className='flex flex-col gap-2' style={{listStyleType:"none"}}>
                <li>About</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Swiggy One</li>
                <li>Swiggy Instamart</li>
                <li>Swiggy Genie</li>
            </ul>
        </div>

        <div className=' flex flex-col gap-6'>
            <div className=' flex flex-col gap-4'>
                <h3 className=' text-lg font-semibold'>Contact Us</h3>
                <ul className='flex flex-col gap-2' style={{listStyleType:"none"}}>
                    <li>Help & Support</li>
                    <li>Partner with Us</li>
                    <li>Ride with Us</li>
                </ul>
            </div>

            <div className=' flex flex-col gap-4'>
                <h3 className=' text-lg font-semibold'>Legal</h3>
                <ul className='flex flex-col gap-2' style={{listStyleType:"none"}}>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investors Relation</li>
                </ul>
            </div>
        </div>

        <div className=' flex flex-col gap-4'>
            <h3 className=' text-lg font-semibold'>We Deliver To</h3>
            <ul className='flex flex-col gap-2' style={{listStyleType:"none"}}>
                <li>Banglore</li>
                <li>Gurgon</li>
                <li>Hydrabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
            </ul>
        </div>

      </div>
    );
}

export default Footer
