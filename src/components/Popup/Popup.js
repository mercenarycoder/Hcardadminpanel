import React from 'react'
import './Popup.css';

function Popup(props) {
    let links=props.link;
    let title=props.title;
    let type=props.type;
    return (
        <div onClick={props.clicked} className="overlay-app is-active">
            <div className="pop-up visible">
                <div className="pop-up__title">

                    <svg  className="close" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9l-6 6M9 9l6 6"></path>
                    </svg>
                </div>
                <div className="pop-up__subtitle"></div>
                <img src="https://www.sandlakeimaging.com/wp-content/uploads/2016/12/Xray-300x247.jpg" />
            </div>
            <div className="prescriptions">
                <div className="pop-up__title">

                    <svg className="close" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9l-6 6M9 9l6 6"></path>
                    </svg>
                </div>
                <div className="pop-up__subtitle"></div>
                <img src="https://as2.ftcdn.net/jpg/00/56/61/71/500_F_56617167_ZGbrr3mHPUmLoksQmpuY7SPA8ihTI5Dh.jpg" />
                                               
            </div>
            </div>
    )
}

export default Popup
