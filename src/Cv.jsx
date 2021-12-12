import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './cv.css';
import { Button } from '@mui/material';



const Cv = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <div className="cvpage">
        <div className="cvheading">
        <h3>Download my cv</h3>
        </div>
        <a href='Navy Blue and Black Professional Resume.pdf'>
        <Button variant="contained" color="primary" size="medium"  sx=
        {{textTransform:'capitalize', color:"black"}}>Download</Button>
        </a>
        
        
            </div>
        </>
    )
}

export default Cv;
