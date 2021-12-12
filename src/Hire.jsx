import React from 'react';
import './hire.css';
import ResponsiveAppBar from './ResponsiveAppBar';

const Hire = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <div className="hirepage">
          <div className="hireheading">
            <h1>Hire Me</h1>
            <div className="hireby">

                <div className="hireone">
                <a href="https://www.upwork.com/o/profiles/users/~0105d80306af5b6c91/">
                <img src="upwork.svg" alt="upwork" />
                <h4>upwork</h4>
                </a>
                </div>
                <div className="hireone">
                <a href="https://www.fiverr.com/xeshann?public_mode=true">
                <img src="fiverr.svg" alt="fiver" />
                <h4>fiverr</h4>
                </a>
                </div>
                <div className="hireone">
                <img src="linkedin.svg" alt="linkedin" />
                <h4>linkedin</h4>
                </div>
            </div>
          </div>
        </div>
            
        </>
    )
}

export default Hire
