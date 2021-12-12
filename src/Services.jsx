import React from 'react';
import './ser.css';
import Card from './Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';

const Services = () => {
    return (
        <>
        <ResponsiveAppBar/>
        
    <div className="services">
        <h1>Services</h1>
        <div className="cards">
        <Card imgsrc="sig.svg"
              title="static websites"
              details="
A static website consists of a series of HTML files, each one representing a physical page
 of a website. On static sites, each pag e is a separate HTML file. When you visit the homepage, you are viewing
  only the actual homepage file."
        />
        <Card 
            imgsrc="resp.svg"
            title="responsive websites"
            details="Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website,
             to make it look good on all devices (desktops, tablets, and phones)."
        />
        <Card 
            imgsrc="port.svg"
            title="portfolio websites"
            details="A  portfolio website provides professional information about an individual or
             a company and presents a showcase of their work."
        />
        <Card
             imgsrc="ecomm.svg"
             title="ecommerce websites"
             details="An e-commerce website, by definition, is a website that allows you to buy and sell tangible goods,
              digital products or services online."
        />

        </div>
       </div>
            
        </>
    )
}

export default Services;
