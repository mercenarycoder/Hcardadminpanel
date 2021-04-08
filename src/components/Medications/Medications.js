import React from 'react';
import './Medications.css';

function Medications(props) {
    let arr=props.medicine.map(function(ele){
        return(<li key={ele.id} className="adobe-product">
            <div className="products">
                {ele.name}
            </div>
            <span className="status">
                <span className="status-circle green">
                </span>{ele.duration}</span>
                <span>{ele.dosage}</span>
            <div className="button-wrapper">
                <span>{ele.purpose}</span>
            </div>
        </li>)
    })
    console.log(arr);
    
    return (
        <div>
            <div className="content-section-title">Medications</div>
            <ul>
                {arr}
            </ul>
        </div>
    )
}

export default Medications
