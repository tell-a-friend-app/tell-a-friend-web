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
              Help is closer than you think.
            </h1>
            <p>
              tella.friend is a child's second line of defense. Join the waitlist to get notified when the tella.friend app is available.
            </p>
            <div>
              <a href='http://eepurl.com/ijjwnz' target="_blank" rel="noreferrer"><button className="notifyButtonBlack">Join the waitlist</button></a>
            </div>
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