import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import photo from './phoo.jpg';
import Heder from './Heder';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        
        email: '',
        password: '',
       
      });
    
  const navigate = useNavigate();    
      const handleInputChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
     
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
       
        console.log('Form submitted:', form);
    
        axios.get(`http://localhost:8080/api/user/${form.email}/${form.password}`)
            .then(response => {
                // Handle successful login
                console.log(response.data);
                console.log('Login successful', form.email);
                localStorage.setItem('registeredEmail', form.email);
                navigate('/home');
            })
            .catch(error => {
                // Handle login error
                console.error('Login failed:', error.response.data);
            });
       
        setForm({
          
          email: '',
          password: '',
          
        });
        
      };

      
  return (
    <>
     <div className='body'>
      <Heder/>
     <div className="content">

      <div className="text">
        Login Form
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input 
          type="text" 
          required
          name='email'
          onChange={handleInputChange} 
          value={form.email}/>
          <span className="fas fa-user"></span>
          <label>Email</label>
        </div>
        <div className="field">
          <input
           type="password"
            required 
            name='password'
            onChange={handleInputChange}
            value={form.password}/>
          <span className="fas fa-lock"></span>
          <label>Password</label>
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button>log in</button>
        <div className="sign-up">
          Not a member?
          <Link to='/register'>signup now</Link>
        </div>
      </form>
    </div>  
    </div>
  
    </>
  )
}

export default Login