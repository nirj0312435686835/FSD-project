import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Heder from './Heder';
import axios from 'axios';

const Register = () => {

    const [form, setForm] = useState({
        
        email: '',
        password: '',
       
      });
    
      
      const handleInputChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
     
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
       
        console.log('Form submitted:', form);
        try {
          const response = await axios.post('http://localhost:8080/api/user', form);
    
          if (response.status === 200) {
            
           
          } else {
            
            console.error('Login failed:', response.data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
       
        setForm({
          
          email: '',
          password: '',
          
        });
        
      };
  return (
    <div className='body'>
      <Heder />
    <div className="content">
    <div className="text">
      Register Form
    </div>
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input 
        type="text" 
        name='email'
        value={form.email}
        onChange={handleInputChange}
        required />
        <span className="fas fa-user"></span>
        <label>Email</label>
      </div>
      <div className="field">
        <input 
        type="password" 
        name='password'
        value={form.password}
        onChange={handleInputChange}
        required />
        <span className="fas fa-lock"></span>
        <label>Password</label>
      </div>
      <div className="forgot-pass">
        <a href="#">change Password?</a>
      </div>
      <button>Sign up</button>
      <div className="sign-up">
        already register?
        <Link to='/login'>log in</Link>
      </div>
    </form>
  </div> 
  </div>
  )
}

export default Register