import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.css"

function App(){
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  //function to update state of name with value entered by user in form

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  //function to update state of age with value entered by user in form

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

   //function to update state of email with value entered by user in form

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
   }

    //function to update state of password with value entered by user in form

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
     //function to update state of confirm password with value entered by user in form

     const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
     }
       //function will be called when user clicks on submit button

      const handleSubmitChange = (e) => {
        if(password != confirmPassword){
          //If password and confirm password are not matching
          alert("password not match!")
        }

        else{
          //display alert box with user name, age, email details
          alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
        }
        e.preventDefault();
      }
      return(
        <div>
          <header>
            <form onSubmit={(e)=>{handleSubmitChange(e)}}>
              <h1>Sign up Form</h1>
              <img src="https://th.bing.com/th/id/OIP.yGyw0Gsi49veSVUjczDXdwHaCU?pid=ImgDet&rs=1"/>
              <br/>
              <label>Name:</label>
              <input type="text" value={name} required onChange={(e)=>{handleNameChange(e)}}/>
              <br/>
              <label>Age:</label>
              <input type="text" value={age} required onChange={(e)=>{handleAgeChange(e)}}/>
              <br/>
              <label>Email:</label>
              <input type="text" value={email} required onChange={(e)=>{handleEmailChange(e)}}/>
              <br/>
              <label>Password:</label>
              <input type="text" value={password} required onChange={(e)=>{handlePasswordChange(e)}}/>
              <br/>
              <label>Confirm Password:</label>
              <input type="text" value={confirmPassword} required onChange={(e)=>{handleConfirmPasswordChange(e)}}/>
              <br/>
              <input type="submit" value="submit"/>
            </form>
          </header>
        </div>
      );
     }

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)