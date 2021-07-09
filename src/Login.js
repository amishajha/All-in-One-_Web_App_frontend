import React, { useState } from 'react'
import "./Login.css"
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import axios from 'axios';
import {useHistory} from "react-router-dom"
import Footer from './Footer';

const  Login=({setLoginUser}) =>{

  const  history= useHistory()
    const[user,setUser]=useState({
      
        email:"",
        password:""
      
    })

    const handleChange=e=>{
        const {name,value}=e.target
   
        setUser({
            ...user,
            [name]:value
        })
    }
    const login=()=>{
        
    axios.post("http://localhost:9002/login",user)
    .then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
    history.push("/")

    })
    }
    return (
        <div className="login">
      <div className="login__container">
          <h1>All In One</h1>
          <LocalLibraryIcon fontSize="large"/>
         
              <h5>Email</h5>
              <input type='text' name="email" value={user.email} onChange={handleChange}placeholder="Enter your Email"/>
              

              <h5>Password</h5>
              <input type="password" name="password" value={user.password} onChange={handleChange}placeholder="Enter your Password"/>
              <button   className='login__signInButton' onClick={login}>Login</button>
         
        

                <button onClick={()=>history.push("/register")} className="login__registerButton">Register</button>
      </div>
         <Footer/>      
          
        </div>
    )
}

export default Login
