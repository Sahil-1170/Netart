import React from 'react';
import './App.css';
import image1 from "./Components/images/1.png";
import image2 from "./Components/images/2.png";
import image3 from "./Components/images/3.png";
import logo from "./Components/logo/logo.png"
import Footer from './Footer/footer';

function App() {
  return (
    <>
      <div className='navbar-logo'>
        <img src={logo} className='logo' alt=''></img>
      </div>
      <div className='container'>
        <img className="img" src={image1} alt=''></img>
        <div className='content'>
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li className='list-content'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for <br /> various projects across the globe to save energy.</li>
            <li className='list-content'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br /> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img className='img2' src={image2} alt=''></img>
          <p className='para-content'>Government of India has awarded the <b> "National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director <br /> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br /> Minister of State.</p>
        </div>
      </div>
      <div className='para'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</div>
      <div className='container-2'>
        <div className='content-2'>
          <img src={image3} alt='' className='img3'></img>
          <p className='para-content-2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
      </div>
      <div className='red-line'></div>
      <div className='container-3'>
        <div className='content-3'>
          <h5>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h5>
          <p className='para-content-3'>
            CHEMICALS & PROCESS
            <span className="red-pipe">|</span>
            POWER
            <span className="red-pipe">|</span>
            WATER & WASTE WATER
            <span className="red-pipe">|</span>
            OILS & GAS
            <span className="red-pipe">|</span>
            PHARMA
            <span className="red-pipe">|</span>
            SUGARS & DISTILLERIES
            <span className="red-pipe">|</span>
            PAPER & PULP
            <span className="red-pipe">|</span>
            MARINE & DEFENCE
            <span className="red-pipe">|</span>
            METAL & MINING
            <span className="red-pipe">|</span>
            FOOD & BEVERAGE
            <span className="red-pipe">|</span>
            <br />
            PETROCHEMICAL & REFINERIES
            <span className="red-pipe">|</span>
            SOLAR
            <span className="red-pipe">|</span>
            BUILDING
            <span className="red-pipe">|</span>
            HVAC
            <span className="red-pipe">|</span>
            FIRE FIGHTING
            <span className="red-pipe">|</span>
            AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
        
        <Footer />

    </>
  );
}

export default App;

