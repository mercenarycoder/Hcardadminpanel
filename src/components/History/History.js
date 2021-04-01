import React from 'react'
import './History.css';

function History(props) {
    return (
        <div>
            <div className="content-section-title">Diagnosis History</div>
            <ul>
                <li className="adobe-product">
                    <div className="products">

                        Heart Surgery
                                        </div>
                    <span className="status">
                        <span className="status-circle green"></span>
                                        Dr. Akshay Bahadur</span>
                    <div className="button-wrapper">
                        <button className="content-button status-button open">Hostitalized</button>
                        <div className="menu">
                            <button className="dropdown">
                                <ul>
                                    <li><a href="#">12 Oct 2020</a></li>
                                    <li><a href="#">Learn more</a></li>

                                </ul>
                            </button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default History
