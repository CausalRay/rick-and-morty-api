import React, { useEffect } from 'react';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BoyIcon from '@mui/icons-material/Boy';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import TransgenderIcon from '@mui/icons-material/Transgender';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./description.css"

const Description = ({results}) => {
    let display;


    if (results) {
    display = results.map((element, index) => {
        return (
            
       <div key={index}>
       <div  className="info__name schwifty ">{element.name}</div>
           
           <div className="info__icon--wrapper">
           <MonitorHeartIcon className="info__icon"/>
           <div className="info__status">{element.status}</div>
           
           </div>

           <div className="info__icon--wrapper">
           <BoyIcon className="info__icon"/>
           <div className="info__species ">{element.species}</div>
           </div>

           {
            (()=>{
                if(element.type){

                    return (
                        
                        <div className="info__icon--wrapper">
                    <QuestionMarkIcon className="info__icon"/>
                    <div className="info__type ">{element.type}</div>
                    </div>
                    )
                }
                else {
                    return 
                }
            })()
            }

           <div className="info__icon--wrapper">
           <TransgenderIcon className="info__icon"/>
           <div className="info__gender ">{element.gender}</div>
           </div>

           <div className="info__icon--wrapper">
           <HomeIcon className="info__icon"/>
           <div className="info__home--planet ">Home Planet: {element.origin.name} </div>
           </div>

           <div className="info__icon--wrapper">
           <RemoveRedEyeIcon className="info__icon"/>
           <div className="info__last--seen  ">Last seen: {element.location.name}</div>
           </div>

           </div>
        )
    })
   }


    return (
       
       <>
       {display}
       </>
 
    );
}

export default Description;
