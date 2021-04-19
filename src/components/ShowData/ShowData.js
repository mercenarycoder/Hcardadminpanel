import React,{useState} from 'react';
import './ShowData.css';
import Profile from '../Profile/Profile';
import Medications from '../Medications/Medications';
import Allergies from '../Allergies/Allergies';
import Dieseas from '../Dieseas/Dieseas';
import Reports from '../Reports/Reports';
import Prescriptions from '../Prescriptions/Prescriptions';
import History from '../History/History';
import RightNavigation from '../RightNavigation/RightNavigation';
import Popup from '../Popup/Popup';


function ShowData(props) {
    const [popDialog,setPopDialog]=useState({
        title:null,
        link:null,
        type:null
    });
        
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="content-section">
                    <Profile 
                    profile={props.profile} 
                    numP={props.numP}
                    numR={props.numR}
                    />
                </div>
                <div className="content-section">
                    <Medications
                    medicine={props.medicine}
                    />
                </div>
                <div className="content-section">
                    <Allergies  
                    allergy={props.allergy}
                    />
                </div>
                <div className="content-section">
                    <Dieseas 
                    diesease={props.diesease}
                    />
                </div>
                <div className="content-section">
                    <Reports 
                    clicked={(id,type)=>props.clicked(id,type)}
                    reports={props.reports}
                    />
                </div>
                <div className="content-section">
                    <Prescriptions 
                    clicked={(id,type)=>props.clicked(id,type)}
                    prescriptions={props.prescriptions}
                    />
                </div>
                <div className="content-section">
                    <History 
                    history={props.history}
                    />
                </div>
            </div>        
            <RightNavigation />
        </div>
    )
}

export default ShowData
