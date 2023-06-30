// import React from 'react'
// import Navbar from './Navbar'
// import Mobilenav from './Mobilenav'
// import Mainnav from './Mainnav'
// export default function Destinations() {
//   return (
//     <div>
//       <Navbar/>
      

// <br/>
// <br/>

// <Mainnav/>






      


//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react';

// const Destinations = () => {
//   const [systemWidth, setSystemWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setSystemWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <p>System Width: {systemWidth}px</p>
//     </div>
//   );
// };

// export default Destinations;


import React, { useState } from 'react';

function Destinations() {
  const [showColumn, setShowColumn] = useState(false);

  const toggleColumn = () => {
    setShowColumn(!showColumn);
  };

  return (
    <div>
      <div className="container">
        <div className="column">Column 1</div>
        <div className="column">Column 2</div>
        {showColumn && <div className="column">Column 3</div>}
      </div>
      <button onClick={toggleColumn}>Toggle Column</button>
    </div>
  );
}

export default Destinations;
