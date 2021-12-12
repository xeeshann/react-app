import React from 'react';
import './price.css';
import BasicCard from './Basiccard';
import ResponsiveAppBar from './ResponsiveAppBar'

const Price = () => {
    return (
        <>
        <ResponsiveAppBar/>
        <div className="pricepage">
       <div className="heading">
           <h1>price</h1>
       </div>
       <div className="pricecards">
       <BasicCard
           heading="basic websites"
           optionone="html and css ."
           optiontwo="without javascript."
           optionthree="two or three pages."
           optionfour="classic."
           optionfive="very less functional"
           price="$15"
       />
       <BasicCard
           heading="dynamic website"
           optionone="html and css ."
           optiontwo="with javascript."
           optionthree="upto five pages."
           optionfour="modern."
           optionfive="slightly functional"
           price="$40"
       />
       <BasicCard
          heading="e-commerce website"
           optionone="html and css ."
           optiontwo="with javascript."
           optionthree="upto eight pages."
           optionfour="advanced."
           optionfive="functional"
           price="$100"
       />
       </div>

        </div>
            
        </>
    )
}

export default Price;
