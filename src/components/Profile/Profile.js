import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <div>
            <div className="content-section-title">Profile</div>
            <div className="col-md-12 profile">

                <div className="box__two">
                    <div className="transaction">
                        <div className="transaction__title">
                            <img className="proile-img" src="https://source.unsplash.com/kbjIOft9Dbg" height="60" width="60" />
                            <h3>{props.profile.name}</h3>
                            <p> <svg viewBox="-83.5 0 500 500">
                              
                            </svg> <span>Mobile:-{props.profile.mobile}</span></p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png" height="100" width="100" />
                    </div>
                    <div className="transaction">
                        <div className="transaction__title">
                            <h5>Blood Group : {props.profile.blood}</h5>
                            <p className="balance__text">Age : {props.profile.dob}</p>
                            {/* <p className="balance__text">raghavpatnecha06@gmail.com</p> */}
                        </div>
                        <p>Emergency contact: ****3643</p>
                    </div>
                    <div className="images">
                        <div className="days-left" >
                            {props.numR} reports
                    </div>
                        <div className="days-left" >
                        {props.numP} prescriptions
                    </div>
                    </div><br />
                    <div className="images">
                    </div>
                    <button className="content-button">Emergency Notify</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
