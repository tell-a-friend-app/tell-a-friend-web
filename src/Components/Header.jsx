import React from 'react';
import NavBar from './NavBar';
import Phone from '../headerPhone.png';
import '../App.css';

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <NavBar/>
        <div className="Main-header">
          <div className="header-left">
            <h1>
              Help is closer thank you think.
            </h1>
            <p>
              Tella.Friend is a child's second line of defense. Get notified when the Tella.Friend app is available.
            </p>
            <a href='http://eepurl.com/ijjwnz' target="_blank" rel="noreferrer"><button className="notifyButtonBlack">Get Notified</button></a>
          </div>
          <div className="header-right">
            <img src={Phone} id="headerPhone" alt="app in phone rendered"/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;