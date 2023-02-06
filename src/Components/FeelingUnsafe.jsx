import React from 'react';
import Phone from '../feelingunsafePhone.png';
import '../App.css';

const FeelingUnsafe = () => {
  return (
    <div>
      <header className="FeelingUnsafe-section">
        <div className="FeelingUnsafe-left">
          <h1>
            Do you have something you want to get off your chest?
          </h1>
          <p>
            Feeling unsafe at home? Does life feel heavy? Do you need an out or safe place? Use tella.friend to learn about what abuse is, get free resources, and connect with your school counselor to get help!
          </p>
        </div>
        <div className="FeelingUnsafe-right">
          <img src={Phone} alt="App Intro - you are safe" id="safePhone"/>
        </div>
      </header>
    </div>
  )
}

export default FeelingUnsafe;