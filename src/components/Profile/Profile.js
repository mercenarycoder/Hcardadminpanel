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
                            <h3>Raghav Patnecha</h3>
                            <p> <svg viewBox="-83.5 0 500 500">
                                <g fillRule="evenodd">
                                    <path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
                                </g>
                            </svg> <span>Bhopal, India</span></p>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png" height="100" width="100" />
                    </div>
                    <div className="transaction">
                        <div className="transaction__title">
                            <h5>Blood Group : O+</h5>
                            <p className="balance__text">Age : 22</p>
                            <p className="balance__text">Address : 547, High Street, Balewadi, Baner</p>
                            <p className="balance__text">raghavpatnecha06@gmail.com</p>
                        </div>
                        <p>Emergency contact: ****3643</p>
                    </div>
                    <div className="images">
                        <div className="days-left" >
                            10 reports
          </div>
                        <div className="days-left" >
                            5 prescriptions
          </div>
                        <div className="days-left" >
                            Last Test Date : 3 days ago
          </div>
                        <div className="days-left">
                            High Blood Pressure
          </div>

                    </div><br />
                    <div className="images">
                        <div className="days-left">
                            Last Hospital Visit : Fortis, Pune
          </div>

                        <div className="days-left">
                            Diabetic
          </div>

                    </div>
                    <button className="content-button">Emergency Notify</button>
                </div>
            </div>

        </div>
    )
}

export default Profile
