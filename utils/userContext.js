import { createContext } from "react";

const userContext=createContext({
    loggedInUser:"Default Name"
})

export default userContext