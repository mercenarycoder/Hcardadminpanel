import React from 'react';
import './Reports.css';

function Reports(props) {
    return (
        <div>
            <div className="content-section-title">Recent Reports</div>
            <div className="apps-card">
                <div className="app-card">
                    <span>

                        Left Arm X-Ray
                                        </span>
                    <div className="app-card__subtext">Fracture of both ulna and radius.</div>
                    <div className="app-card-buttons">
                        <div className="reporter">Sahyadri Speciality Labs Lab</div>
                        <button className="content-button status-button">View</button>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Reports
