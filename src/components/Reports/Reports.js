import React from 'react';
import './Reports.css';

function Reports(props) {
    let reports=props.reports.map((ele)=>{
        return(
            <div key={ele.id}  className="app-card">
            <span>
                {ele.title}--{ele.date}
            </span>
            <div className="app-card__subtext">{ele.details}</div>
            <div className="app-card-buttons">
                <div className="reporter">{ele.observer}</div>
                <button onClick={props.clicked(ele.id,'reports')} className="content-button status-button">View</button>
            </div>
        </div>
        );
    })
    return (
        <div>
            <div className="content-section-title">Recent Reports</div>
            <div className="apps-card">
            {reports}
            </div>
        </div>
    )
}

export default Reports
