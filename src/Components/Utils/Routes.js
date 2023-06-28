import React from "react";
import { BrowserRouter ,Router,Routes ,Route } from "react-router-dom";


import Hostels from "../Pages/Hostels";
import Workations from "../Pages/Workations";
import Destinations from "../Pages/Destinations";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Membership from "../Pages/Membership";
function Routesmain (){
    return(
<div>
  
    
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/destinations" Component={Destinations}/>
            <Route exact path="/hostels" Component={Hostels}/>
            <Route exact path="/workations" Component={Workations}/>
            <Route exact path="/membership" Component={Membership}/>
            <Route exact path="/blogs" Component={Blogs}/>
        </Routes>
    
    
</div>
    )
}
export default Routesmain;