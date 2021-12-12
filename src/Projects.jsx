import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import './cv.css';
import { Button } from '@mui/material';
const Projects = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <div className="cvpage">

        <div className="cvheading">
            <h3>Projects</h3>
        </div>
        <a href='https://xeeshann.github.io/portfolio-v1/#'>
        <Button variant="contained" color="primary" size="medium"  sx=
        {{textTransform:'capitalize',margin:"20px", color:"black"}}>Portfolio 1</Button>
        </a>

        <a href='https://xeeshannteeli.me/'>
        <Button variant="contained" color="primary" size="medium"  sx=
        {{textTransform:'capitalize', color:"black"}}>Portfolio 2</Button>
        </a>

        <a href='email.html'>
        <Button variant="contained" color="primary" size="medium"  sx=
        {{textTransform:'capitalize',margin:"20px", color:"black"}}>Html email sig.</Button>
        </a>
        </div>
            
        </>
    )
}

export default Projects;
