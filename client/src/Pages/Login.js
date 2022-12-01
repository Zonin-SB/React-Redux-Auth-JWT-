import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import LoginNavbar from '../Components/LoginNavbar/LoginNavbar'
import LoginForm from '../Components/LoginForm/LoginForm'
import jwt from 'jwt-decode'


function Login() {
   const navigate=useNavigate()
  useEffect(() => {
   
    const token=localStorage.getItem('token')
    if(token){
      const user=jwt(token)
      if(user){
        navigate('/home')
      }else{
        navigate('/')
      }
    }else{
      navigate('/')
    }
  
    
  }, [navigate])
  
  return (
    <div>
    
        <LoginNavbar/>
        <LoginForm/>
    </div>
  )
}

export default Login