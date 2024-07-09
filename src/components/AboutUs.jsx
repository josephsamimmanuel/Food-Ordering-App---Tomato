import React from 'react'
import UserClass from './UserClass'
import userContext from '../../utils/userContext'

class AboutUs extends React.Component{
  constructor(props){
    super(props)

    // console.log("parent Constructor")
    
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount")
      }

  render(){
    // console.log("parent Render")

    return (
      <div className='aboutUs'>
        <h1 className=' text-xl font-bold pb-3'>Welcome to Tomato !</h1>
        <userContext.Consumer>
          {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </userContext.Consumer>

        <div className=' flex flex-col gap-12'>
        <div>
          <h3 className=' text-lg font-bold'>About Us</h3>
          <p>Welcome to Tomato, your premier food delivery app that brings a world of flavors right to your doorstep. Founded with a passion for culinary excellence and a commitment to convenience, Tomato is here to revolutionize the way you experience food.</p>
        </div>
        <div>
          <h3 className=' text-lg font-bold'>Our Story</h3>
          <p>Tomato was born out of a simple idea: to make delicious meals from top-notch restaurants accessible to everyone, everywhere. Whether you’re craving a gourmet feast, a quick snack, or your favorite comfort food, Tomato delivers it all with just a few taps on your screen. Our journey began with a love for food and a vision to connect people with the best dining experiences their city has to offer.</p>
        </div>
        <div>
          <h3 className=' text-lg font-bold'>Our Mission</h3>
          <p>At Tomato, our mission is to bring joy and satisfaction through food. We partner with a diverse range of restaurants to offer an extensive menu that caters to every taste and preference. From local favorites to international cuisines, we ensure that every meal delivered meets the highest standards of quality and freshness.</p>
        </div>
        <div className=' flex flex-col gap-3' >
          <h3 className=' text-lg font-bold'>Why Choose Tomato?</h3>
          <div className=' flex flex-col gap-2'>
          <p><span className=' font-bold'>Wide Selection:</span> <span>Explore an extensive variety of cuisines and dishes from your favorite local eateries and top-rated restaurants.</span></p>
          <p><span className=' font-bold'>Fast Delivery:</span> <span>Our efficient delivery network ensures that your food arrives hot and fresh, right when you need it.</span></p>
          <p><span className=' font-bold'>User-Friendly App: </span> <span> With a sleek and intuitive interface, ordering your next meal is just a few taps away.</span></p>
          <p><span className=' font-bold'>Customer Support:</span> <span>Our dedicated support team is always here to assist you, ensuring a smooth and pleasant experience every time.</span></p>
          </div>
        </div>
        <div>
          <h3 className=' text-lg font-bold'>Sustainability</h3>
          <p>We care about our planet as much as we care about our customers. Tomato is committed to sustainable practices, including eco-friendly packaging and minimizing our carbon footprint. Together, we can enjoy great food while taking care of our environment.</p>
        </div>
        <div>
          <h3 className=' text-lg font-bold'>Join the Tomato Family</h3>
          <p>Whether you’re a foodie exploring new tastes or someone who loves the convenience of having meals delivered, Tomato is your perfect companion. Download the app today and embark on a culinary adventure with us.

Thank you for choosing Tomato. We’re excited to serve you!</p>
        </div>
        </div>
        <UserClass name={"first"} location={"Tirunelveli"}/>
      </div>
    )
  }
}



export default AboutUs
