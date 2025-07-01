// import React from 'react';
// import {Link} from 'react-router-dom';

// function Signup() {
//     return ( 
//         <div>
//             <Link to="http://localhost:3001/signup" target="_self" className="tab">
//                 Signup to Dashboard
//             </Link>
//         </div>
//      );
// }

// export default Signup;

import { useEffect } from "react";

const Signup = () => {
  useEffect(() => {
    // Redirect to dashboard's actual signup page
    window.location.href = "http://localhost:3002/signup";
  }, []);

  return <p>Redirecting to Signup...</p>;
};

export default Signup;
