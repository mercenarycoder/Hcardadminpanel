import React, { Component } from 'react';
import './RightNavigation.css';

class RightNavigation extends Component {

    render() {
        return (
            <div className="col-md-4">

                <div className="messages-section">
                    <button className="messages-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                    </button>
                    <div className="projects-section-header">
                        <p>Recent Patients</p>
                    </div>
                    <div className="messages">
                        <div className="message-box">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image" />
                            <div className="message-content">
                                <div className="message-header">
                                    <div className="name">Stephanie</div>
                                    <div className="content-button  view-patient">
                                        View
</div>
                                </div>
                                <p className="message-line time">
                                    <svg viewBox="-83.5 0 500 500">
                                        <g fillRule="evenodd">
                                            <path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
                                        </g>
                                    </svg> <span>Bhopal, India</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightNavigation;