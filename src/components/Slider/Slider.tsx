import React, {useState, useRef, useEffect} from 'react';
import './Style.css';
import adobe from '../../assets/company logo/adobe.svg';
import amazon from '../../assets/company logo/amazon.svg';
import atlassian from '../../assets/company logo/atlassian.svg';
import DeutscheBank from '../../assets/company logo/Deutsche_Bank.png';
import cisco from '../../assets/company logo/cisco.svg';
import google from '../../assets/company logo/google.svg';
import masterCard from '../../assets/company logo/masterCard.svg';
import microsoft from '../../assets/company logo/microsoft.svg';
import uber from '../../assets/company logo/uber.svg';

const Slider = () => {
    return (
        <>
            <div style={{}}>
            <div className="logos">
            <div className="logos-slide">
                <img src={adobe} alt="" srcSet="" />
                <img src={amazon} alt="" srcSet="" />
                <img src={atlassian} alt="" srcSet="" />
                <img src={DeutscheBank} alt="" srcSet="" />
                <img src={cisco} alt="" srcSet="" />
                <img src={google} alt="" srcSet="" />
                <img src={masterCard} alt="" srcSet="" />
                <img src={microsoft} alt="" srcSet="" />
                <img src={uber} alt="" srcSet="" />
  </div>
</div> 
</div> 
{/* fix later */}
      
            <script>
            var copy = document.querySelector(".logos-slide").cloneNode(true);
            document.querySelector(".logos").appendChild(copy);
            </script>
      
        </>
    )
}

export default Slider;

