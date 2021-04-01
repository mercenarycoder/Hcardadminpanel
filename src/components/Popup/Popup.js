import React from 'react'

function Popup(props) {
    return (
        <div>
            <div className="pop-up">
                <div className="pop-up__title">

                    <svg className="close" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M15 9l-6 6M9 9l6 6"></path>
                    </svg>
                </div>
                <div className="pop-up__subtitle"></div>
                <img src="https://www.sandlakeimaging.com/wp-content/uploads/2016/12/Xray-300x247.jpg" />

            </div>
        </div>
    )
}

export default Popup
