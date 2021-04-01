import React from 'react';
import './Medications.css';

function Medications(props) {
    return (
        <div>
            <div className="content-section-title">Medications</div>
            <ul>
                <li className="adobe-product">
                    <div className="products">

                        Alendronate
                                        </div>
                    <span className="status">
                        <span className="status-circle green"></span>
                                        500mg</span><span>Pill</span>
                    <div className="button-wrapper">
                        <span>Lupin</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Medications
