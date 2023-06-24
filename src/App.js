import React from "react";
import Navbar from "./Components/Pages/Navbar";
import Routesmain from "./Components/Utils/Routes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
    
    <Router>
      <Routesmain/>
    </Router>
    </div>
  );
}

export default App;
