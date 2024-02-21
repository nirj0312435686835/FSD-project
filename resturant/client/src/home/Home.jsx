import React from "react";
import Heder from "../login/Heder";
import iom from "./homeimg.jpg";
import "./Home.css";
import Card from "./Card";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleSaveButtonClick = () => {
    console.log(selectedValue);
    if (selectedValue === "volvo") {
      navigate("/nadiad");
    }
    if (selectedValue === "saab") {
      navigate("/surat");
    }
    if (selectedValue === "mercedes") {
      navigate("/ahmdabad");
    }
    if (selectedValue === "audi") {
      navigate("/vadodra");
    }
  };

  return (
    <div>
      <div className="main-home">
        <div className="home-heder">
          <Heder />
        </div>
       
        <div
          style={{
            width: "1225px",
            height: "400px",
            border: "1px solid white",
            marginTop: "80px",
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${iom})`,
            backgroundSize: "cover",
          }}
        >
             <form className='form-home-main' style={{marginLeft:'300px',marginTop:'200px'}}>
            <select value={selectedValue} onChange={handleSelectChange} className='home-select'>
                <option className='op' value="volvo">Nadiad</option>
                <option   className='op' value="saab">Surat</option>
                <option   className='op' value="mercedes">Ahemdabad</option>
                <option   className='op' value="audi">Vadodra</option>
            </select>
        <input type="submit" value="Find"  className='input-home' placeholder='Select City' onClick={handleSaveButtonClick} />
        </form>
        </div>


      </div>
      <div className="card-home"></div>
      <Footer/>
    </div>
  );
};

export default Home;
