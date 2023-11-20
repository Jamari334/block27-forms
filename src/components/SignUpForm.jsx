import React from "react"
import { useState } from "react";



const SignUpform = () => {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

 async function handleSumbit (event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
        {
            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
        
            body: JSON.stringify({ username: userName, password: password }),
        })
        
      
const result = await response.json();

console.log(result);

        
    } catch (error) {
        setError(error.message)
    }
   
  }
  


 return (
  <>
    <h2> Sign Up </h2>
    {error && <p>{error}</p>}
      < form  onSubmit={handleSumbit}>
        <div>
            Username :<input value = {userName} onChange = {(e) => setUserName(e.target.value)}></input>
        </div>
        <div> 
            Password: <input value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
        </div>
        <label><button>Submit</button></label>
      </form >
  </>
    );
}

//<input value={username} onChange={(e) => setUsername(e.target.value)} />
// for each useState
export default SignUpform;