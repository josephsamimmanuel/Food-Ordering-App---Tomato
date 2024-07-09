import React from 'react'
import CategoryList from './CategoryList'
import { useSelector } from 'react-redux'
import YourCartEmpty from './YourCartEmpty'

function CartPage() {
    const itemCategory=useSelector((store)=>store.cart.items)       // Reading the Data (items[] from CartSlice) // Subscribing to the store // Selector
  {
    return itemCategory.length==0?(<YourCartEmpty/>): ((
    <div>
      <h1 className=' text-2xl font-bold text-center py-4'>Cart</h1>
      <CategoryList itemCategory={itemCategory}/>
    </div>
  ))}
}

export default CartPage
