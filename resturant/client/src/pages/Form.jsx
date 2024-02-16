import React from 'react';
import { useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = ({name,value,onClose}) => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        numberOfPeople: '',
        reservationDate: '',
        reservationTime: '',
        restaurantName:`${name}`,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();
        
        console.log(formData);
          console.log(name);
        try {
          const response = await axios.post('http://localhost:8080/api/reservation', formData);
    
          if (response.status === 200) {
            console.log(response);
            console.log('Login successful');

            setFormData({
              fullname: '',
              email: '',
              phone: '',
              numberOfPeople: '',
              reservationDate: '',
              reservationTime: '',
              restaurantName:`${name}`,
            })
              value=false
           onClose(value); 

          } else {
            
            console.error('Login failed:', response.data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };



  return (
    <div className="reservation-form">
        <p style={{marginLeft:'250px'}}>welcome to</p>
    <h1 className='h1-form'>{name}</h1>
    <form onSubmit={handleSubmit}>
        <div style={{display:'flex'}}>
      <div className="form-group">
        <label htmlFor="fullname" className='label-form'>Full Name</label>
        <input type="text" id="fullname" name="fullname" className='input-form' value={formData.fullname} onChange={handleChange} />
      </div>
      <div className="form-group" style={{marginLeft:'40px'}}>
        <label htmlFor="email" className='label-form'>Email</label>
        <input type="email" id="email" name="email"  className='input-form'  value={formData.email} onChange={handleChange} />
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div className="form-group">
        <label htmlFor="phone number" className='label-form'>Phone Number</label>
        <input type="number" id="phone" name="phone"  className='input-form'  value={formData.phone} onChange={handleChange} />
      </div>
      <div className="form-group" style={{marginLeft:'20px'}}>
        <label htmlFor="numberOfPeople" className='label-form'>Number of People</label>
        <select id="numberOfPeople" name="numberOfPeople"  className='select-form' value={formData.numberOfPeople} onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
      </div>
      <div style={{display:'flex'}}>
      <div className="form-group">
        <label htmlFor="reservationDate" className='label-form'>Reservation Date</label>
        <input type="date" id="reservationDate" name="reservationDate"   className='input-form' value={formData.reservationDate} onChange={handleChange} />
      </div>
      <div className="form-group" style={{marginLeft:'20px'}}>
        <label htmlFor="reservationTime" className='label-form'>Reservation Time</label>
        <input type="time" id="reservationTime" name="reservationTime"  className='input-form'  value={formData.reservationTime} onChange={handleChange} />
      </div>
      </div>
      <button  className="submit-button" type="submit" >Send</button>
    </form>
  </div>
  )
}

export default Form