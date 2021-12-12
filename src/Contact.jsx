import React from 'react';
import './contact.css';
import ResponsiveAppBar from './ResponsiveAppBar'

const Contact = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <div className="contactpage">
        <div className="contactheading"><h3>contact</h3></div>
    <div className="contactgrid">
    <a href="https://www.upwork.com/o/profiles/users/~0105d80306af5b6c91/">
        <div className="firstdiv">
        <div className="img">
           <img src="upwork.svg" alt="upwork" />
           </div>
            <h6 className="contacth5">xeeshann teeli/upwork</h6>
        </div>
        </a>
        <a href="www.linkedin.com/in/shokeen-teeli-186871222">
           <div className="seconddiv">
           <div className="img">
           <img src="linkedin.svg" alt="linkedin" />
           </div>
           <h6 className="contacth5">xeeshann teeli/linkedin</h6> 
                    </div>
                    </a>
                    <a href="https://www.fiverr.com/xeshann?public_mode=true">
          <div className="seconddiv">
          <div className="img">
           <img src="fiverr.svg" alt="fiver" />
           </div>
           <h6 className="contacth5">xeeshann teeli/fiverr</h6>
                     </div>
                     </a>
                     <a href="https://www.xeeshannteeli@gmail.com/">
          <div className="seconddiv">
          <div className="img">
           <img src="gmail.svg" alt="" />
           </div>
           <h6 className="contacth5">xeeshann teeli/email</h6> 
                    </div>
                    </a>

</div>
</div>
            
        </>
    )
}

export default Contact;
