import React from "react";
import Heder from "../login/Heder";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Form from "./Form";


const Containcard = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const card = {
    title: params.get('title'),
    image: params.get('image'),
    details: params.get('details'),
  };  

  const [isHovered, setIsHovered] = useState(false);
 

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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


  const buttonstyle = {
    width: "150px",
    height: "60px",
    marginLeft: "1000px",
    color: "black",
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', 
    backgroundColor: isHovered ? "e1ad01" : "#c89b3f",
  };

  return (
    <div>
      <div>
        <Heder />
      </div>
      <div
        className="flex justify-center items-center h-screen"
        style={{ padding: "20px", marginTop: "70px" }}
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            style={{ width: "100%", height: "290px" }}
            src={card.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4" style={{ marginLeft: "20px" }}>
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">
              {card.details}
            </p>
            <br/>
            <LocationOnIcon/>Nadiad
          </div>
          <div className="px-6 py-4" >
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #food
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #good service
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #good vibes
            </span>
            <button
              style={buttonstyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleOpen}
            >
              Book now
            </button>

            {open && (<React.Fragment>
      <Button onClick={handleOpen} className="bg-success text-white">
       
      </Button>
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
          
                  <Form name={card.title} value={open} onClose={handleClose}/>

          
        </Box>
      </Modal>
    </React.Fragment>
)

            }
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Containcard;
