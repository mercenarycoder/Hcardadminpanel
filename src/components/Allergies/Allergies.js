import React from 'react'

function Allergies(props) {
    let allergy=props.allergy.map((ele)=>{
        return (
            <div key={ele.id} className="app-card">
            <span>
                {ele.allergy}
            </span>
            <div className="app-card__subtext days-left">
                {ele.triggers}
            </div>
            </div>
        )
    })
    return (
        <div>
            <div className="content-section-title">Common &amp; Medication Allergies</div>
            <div className="apps-card">
                {allergy}
            </div>
        </div>
    )
}

export default Allergies
