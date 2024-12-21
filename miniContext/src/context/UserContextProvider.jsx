//Provideer file is jsx because we have to use this in the fragments and fragments only accessible to the jsx files 

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [user,setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children} 
        </UserContext.Provider>
       
    )
}
export default UserContextProvider

//When UserContextProvider wraps a component tree, all child components can access the user state and setUser function by consuming the UserContext.