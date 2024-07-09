import React from "react";

class UserClass extends React.Component{
    constructor(props){         // props
        super(props)
        this.state={            // big Object   // state
            userInfo:{
                name:"Random Name",
                location:"Default",
                avatar_url:"avatar"
            },
        }
        console.log(this.props.name+"child Constructor")

    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/josephsamimmanuel")
        const jsonValue=await data.json()
        this.setState({
            userInfo:jsonValue,
        })
      }
      componentDidUpdate(){
        console.log("Component Did Update")
      }

      componentWillUnmount(){
        console.log("Component Will Update")
      }
      

    render(){
        console.log(this.props.name+"child Render")

        const{name,location,avatar_url}=this.state.userInfo
        return (
            <div className="user">
                <img src={avatar_url} alt="" />
              <span>Name: {name}</span>
              <span>Location: {location}</span>
              <span>contact: josesamimmanuel@gmail.com</span>
            </div>
          );

    }
} 

// React.component come from react | class given to us by react
// render this piece of jsx
export default UserClass