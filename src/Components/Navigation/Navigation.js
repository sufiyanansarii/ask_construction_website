import React from 'react'
import './Navigation.css'
import asklogo from '../../assets/svg/logo22.svg'
import { Link } from "react-router-dom";
import SearchButton from '../Searchbutton/Searchbutton';
const Navigation = () => {
  return (
    <div className='Navigation'>
        <div className='container'>
            <div className='nav_inner'>
        <div className='navlogo'>
            <img src={asklogo} alt="" />
        </div>
        <div className='navmenu'>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/pages">our services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='navsearch'>
       <SearchButton/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navigation