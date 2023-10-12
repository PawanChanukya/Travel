
// import React from "react";

// export default function Home() {

//   return (
//     <div className="home-body">
//         <div className="home-content">
//         <h2 className="home-text home-top">Find your partner in your journey</h2>
//         <button className="button">Login</button>
//         <h4 className="home-text home-top">Don't have an account?</h4>
//         <button className="button button-2">Create one!</button>
//         <br/>
//         <a href="">Learn more about us!</a>
//         </div>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignupClick = () => {
    navigate('/signup');  // Redirect to the Signup page
  };

  return (
    <div className="home-body">
      <div className="home-content">
        <h2 className="home-text home-top">Find your partner in your journey</h2>
        <button className="button">Login</button>
        <h4 className="home-text home-top">Don't have an account?</h4>
        <button className="button button-2" onClick={handleSignupClick}>
          Create one!
        </button>
        <br />
        <a href="">Learn more about us!</a>
      </div>
    </div>
  );
}
