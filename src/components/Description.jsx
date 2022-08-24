import React from 'react';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BoyIcon from '@mui/icons-material/Boy';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HomeIcon from '@mui/icons-material/Home';
import TransgenderIcon from '@mui/icons-material/Transgender';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./description.css"

const Description = (props) => {
    return (
        <div>
            <div className="info__name schwifty ">{props.name}</div>
                
                <div className="info__icon--wrapper">
                <MonitorHeartIcon className="info__icon"/>
                <div className="info__status ">{props.status}</div>
                </div>

                <div className="info__icon--wrapper">
                <BoyIcon className="info__icon"/>
                <div className="info__species ">{props.species}</div>
                </div>

                <div className="info__icon--wrapper">
                <QuestionMarkIcon className="info__icon"/>
                <div className="info__type ">{props.type}</div>
                </div>

                <div className="info__icon--wrapper">
                <TransgenderIcon className="info__icon"/>
                <div className="info__gender ">{props.gender}</div>
                </div>

                <div className="info__icon--wrapper">
                <HomeIcon className="info__icon"/>
                <div className="info__home--planet ">Home Planet: {props.home_planet} </div>
                </div>

                <div className="info__icon--wrapper">
                <RemoveRedEyeIcon className="info__icon"/>
                <div className="info__last--seen  ">Last seen: {props.last_seen}</div>
                </div>

                <div className="info__icon--wrapper">
                <TravelExploreIcon className="info__icon"/>
                <div className="dimension ">{props.dimension}</div>
                </div>






        </div>
    );
}

export default Description;
