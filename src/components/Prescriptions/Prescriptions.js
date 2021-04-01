import React from 'react'

function Prescriptions(props) {
    return (
        <div>
            <div className="content-section-title">Recent Prescriptions</div>
            <div className="apps-card">
                <div className="app-card">
                    <span>

                        Prescribed - 04.02.2021
                                        </span>
                    <div className="app-card__subtext">Dr. Seema Gulati - Cardiologist</div>
                    <div className="app-card-buttons">
                        <div className="reporter">Self Uploaded</div>
                        <button className="content-button pres">View</button>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Prescriptions
