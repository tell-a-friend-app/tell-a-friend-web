import React from 'react';
import Phone from '../gethelpPhone.png';
import '../App.css';

const GetHelp = () => {
  return (
    <div>
      <header className="Gethelp-section">
          <h1>
            Get the help you need
          </h1>
          <p>
            tella.friend provides a direct and safe communication line with your school counselor to help you receive support.
          </p>
          <img src={Phone} alt="App reporting process" id="gethelpPhone"/>
      </header>
    </div>
  )
}

export default GetHelp;