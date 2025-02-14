import React from "react";
// import Login from './components/Login'; // Correct import if Login.jsx is inside src/components
 // Import the Login component

import './App.css';  // Include the styles if you have a global stylesheet
import Login from "./components/login";
import LoginW from "./components/login/login";

function App() {
  return (
    <div>
      {/* <Login /> Render the Login component */}
      <LoginW/>
    </div>
  );
}

export default App;
