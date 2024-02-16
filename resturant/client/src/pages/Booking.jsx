import React, { useEffect, useState } from 'react';
import Heder from '../login/Heder';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Editform from './Editform';

const Booking = () => {

    const [useremail,setuseremail]=useState('');
    const [userdata,setuserdata]=useState([]);

    const[open,setOpen]=useState(false);

    useEffect (()=>{
        const storedEmail = localStorage.getItem('registeredEmail');
        
        setuseremail(storedEmail);
    },[]);

useEffect(()=>{
    const getbooking=()=>{
        console.log(useremail);
        axios.get(`http://localhost:8080/api/reservation/${useremail}`)
        .then(response => {
            // Handle successful login
            console.log(response);
            const data=response.request.response;
            console.log(data);
            setuserdata(JSON.parse(data));
            
            
        })
        .catch(error => {
            // Handle login error
            // console.error('get reservation failed:', error.response.data);
        });
    }

    getbooking();
},[useremail]);
   
const handledelete = (id) =>{
    axios.delete(`http://localhost:8080/api/reservation/${id}`)
    .then(response => {
        console.log('Record deleted successfully');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error deleting record:', error);
        
    })
   
}

const handleEdit = () => {
        setOpen(true);
}

const handleClose=()=>{
    setOpen(false);
}


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "white",
    borderRadius: "0.5rem",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <>
    <div>
            <Heder/>
    </div>
    <div style={{marginTop:'90px'}}>
        <h1 style={{color:'black'}}>Booking by {useremail}</h1>
    </div>
   
    <div >
      {userdata.map((dataItem) => (
        <div key={dataItem.id}>
             <div style={{border:'2px solid black',width:'900px',height:'250px',marginLeft:'140px',marginTop:'30px'}}>
          <p style={{marginLeft:'20px',marginTop:'20px'}}><b>Restaurent name: </b>{dataItem.restaurantName}</p>
          <p style={{marginLeft:'20px'}}><span style={{ marginRight: '150px' }}><b>Book person Full Name: </b>{dataItem.fullname}</span>
          <span><b>phone number:</b> {dataItem.phone}</span></p>
          <p style={{marginLeft:'20px'}}><b>number of People:</b> {dataItem.numberOfPeople}</p>
          <p style={{marginLeft:'20px'}}><span style={{ marginRight: '150px' }}><b>date:</b> {dataItem.reservationDate}</span>
          <span><b>time:</b> {dataItem.reservationTime}</span></p>
          <button style={{backgroundColor:'transparent',width:'50px',height:'50px',marginLeft:'750px',border:'none',cursor: 'pointer'}} onClick={handleEdit}><EditIcon/></button>
          <button style={{backgroundColor:'transparent',width:'50px',height:'50px',marginLeft:'20px',border:'none',cursor: 'pointer'}} onClick={() => handledelete(dataItem.id)}><DeleteIcon/></button>
          {open &&  (<React.Fragment>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="flex-grow-1"></div>
            <h5 className="mb-0 flex-grow-1 d-flex justify-content-center font-weight-bold text-primary">
              Book Table
            </h5>
            <div  className="p-0 flex-grow-1 d-flex justify-content-end">
              <CloseIcon
                style={{
                  cursor: "pointer"
                }}
                onClick={handleClose}
              />
            </div>
          </div>
          
                  <Editform 
                  id={dataItem.id}
                  fullname={dataItem.fullname}
                  phone={dataItem.phone}
                  restaurantName={dataItem.restaurantName}
                  numberOfPeople={dataItem.numberOfPeople}
                  reservationDate={dataItem.reservationDate}
                  reservationTime={dataItem.reservationTime}
                  email={dataItem.email}
                   value={open} onClose={handleClose}/>

          
        </Box>
      </Modal>
    </React.Fragment>
)

            }
          </div>    
        </div>
      ))}
    
    </div>
    </>
  )
}

export default Booking