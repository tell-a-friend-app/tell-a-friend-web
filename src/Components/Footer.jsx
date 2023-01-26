import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>Follow us on our socials</p>
      <div className="socials">
        <a href="https://www.instagram.com/tella.friendapp/"><AiFillInstagram color="black"/></a>
        <a href="https://www.tiktok.com/@tellafriend.app/"><FaTiktok color="black"/></a>
        <a href="https://www.linkedin.com/company/tell-a-friend-app//"><FaLinkedin color="black"/></a>
      </div>
    </footer>
  )
}

export default Footer;