import React from 'react'
import emptyCart from '../../emptyCart.jpg'

function YourCartEmpty() {
  return (
    <div className=' flex flex-col justify-center items-center py-24'>
      <img src={emptyCart} alt=""/>
      <h1 className=' text-2xl font-bold'>Your Cart is Empty. Add Items and Continue Shopping</h1>
    </div>
  )
}

export default YourCartEmpty
