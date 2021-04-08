import React from 'react'

function Prescriptions(props) {
    let pres=props.prescriptions.map(ele=>{
        return(
            <div key={ele.id} className="app-card">
            <span>
                {ele.title} - {ele.date}
            </span>
            <div className="app-card__subtext">{ele.doctor}</div>
            <div className="app-card__subtext">{ele.observation}</div>
            <div className="app-card-buttons">
                <div className="reporter">Self Uploaded</div>
                <button onClick={props.clicked(ele.id,'prescriptions')} className="content-button pres">View</button>
            </div>
        </div>
        );
    })
    return (
        <div>
            <div className="content-section-title">Recent Prescriptions</div>
            <div className="apps-card">
                {pres}
            </div>
        </div>
    )
}

export default Prescriptions
