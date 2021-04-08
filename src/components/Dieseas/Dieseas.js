import React from 'react'

function Dieseas(props) {
    let diesease = props.diesease.map(ele => {
        return (
            <div key={ele.id} className="app-card">
                <span>
                    {ele.name}
                </span>
                <div className="app-card__subtext">{ele.details}</div>
                {/* <div className="app-card-buttons">
                    <div className="days-left">21 Jan 2020</div>
                </div> */}
            </div>
        )
    })
    return (
        <div>
            <div className="content-section-title">Chronic Diseases</div>
            <div className="apps-card">
                {diesease}
            </div>
        </div>
    )
}

export default Dieseas
