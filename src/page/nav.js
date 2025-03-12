
// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCartShopping } from 'react-icons/fa6';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav >
      <ul >
        <div>
        <li><Link to="/">Home</Link></li>
        </div>
        <div>
        <li ><Link to="/"><h2> Hair Styles</h2></Link></li>
        </div>
        <div>
        <li><Link to="/products"><span><MdOutlineProductionQuantityLimits /></span></Link></li>
        <li><Link to="/cart"><span><FaCartShopping style={{color:'white'}}/></span></Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

