import React,{useState} from 'react'
import"./Register.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'
import Footer from './Footer'


function Register() {
    const history=useHistory()
    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=e=>{
        const {name,value}=e.target
        console.log(name,value)
        setUser({
            ...user,
            [name]:value
        })

    }

    const register=()=>{

const {name,email,password,reEnterPassword}=user
if(name&&email&&password&&(password===reEnterPassword)){
 
    axios.post("http://localhost:9002/register",user).then(res=>{
        alert(res.data.message)
        history.push("/login")
    })
}else{
    alert("invalid input")
}

    }
    return (
        <div className="register">

<div className="register__container">
          <h1>All In One</h1>
         
          <form>
          <h5>Name</h5>
              <input type='text' name="name" value={user.name} onChange={handleChange} placeholder="Enter your Name"/>

              <h5>Email</h5>
              <input type='text'name="email"value={user.email}  onChange={handleChange} placeholder="Enter your Email"/>
              

              <h5>Password</h5>
              <input type="password" name="password" value={user.password}  onChange={handleChange}  placeholder="Enter your password"/>

              <h5>  Re-enter Password</h5>
              <input type="password" name="reEnterPassword" value={user.reEnterPassword}  onChange={handleChange} placeholder="Enter your Password"/>
              <button  type='submit' onClick={register}  className='login__signInButton'>Register</button>
          </form>
        

          <button onClick={()=>history.push("/login")} className="login__registerButton">Login</button>
       <Footer/>
    
      </div>
          
        </div>
    )
}

export default Register
