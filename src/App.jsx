import React from "react";
import SignUpform from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";




  


  function App() {
    const [token, setToken] = useState(null);
  
    return (
      <>
              
        <SignUpform token={token} setToken={setToken} />
              
        <Authenticate token={token} setToken={setToken} />
            
      </>
    );
  }

export default App
