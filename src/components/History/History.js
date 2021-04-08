import React from 'react'
import './History.css';

function History(props) {
    let history = props.history.map(ele => {
        return (<li key={ele.id} className="adobe-product">
            <div className="products">
                {ele.title}
        </div>
            <span className="status">
                <span className="status-circle green">
                </span>
                {ele.description}
            </span>
            <div className="button-wrapper">
                <div className="menu">
                    <button className="dropdown">
                        <ul>
                            <li><a href="#">12 Oct 2020</a></li>
                            <li><a href="#">Learn more</a></li>
                        </ul>
                    </button>
                </div>
            </div>
        </li>)
    })
    return (
        <div>
            <div className="content-section-title">Diagnosis History</div>
            <ul>
                {history}
            </ul>
        </div>
    )
}

export default History
