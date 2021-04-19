import React,{Component} from 'react';
import './LeftNavigation.css';

class LeftNavigation extends Component{

    render(){
        return(
            <div className="left-side">
            <div className="side-wrapper">
                <div className="side-title">Headth Studio</div>
                <div className="side-menu">
                    <button 
                        onClick={console.log('being clicked')}
                    >
                        <svg viewBox="0 0 512 512">
                            <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                            </g>
                            <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
                            <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
                        </svg>
                        Dashboard
                    </button>
                </div>
            </div>
            <div className="side-wrapper">
                <button 
                onClick={this.props.clicked}
                className="side-title"
                >
                Settings
                </button>
                <div className="side-menu">
                    <div >
                        <svg viewBox="0 0 332 332" fill="currentColor">
                            <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                        </svg>
            Profile Edit
        </div>
                </div>
            </div>

            <div className="side-wrapper">
                <div className="side-title">Membership Code</div>
                <div className="side-menu">
                    <div >

                        #WIP002
        </div>
                </div>
            </div>

            <div className="side-wrapper">
                <div className="side-title">Resource Links</div>
                <div className="side-menu">
                    <div >
                        <svg viewBox="0 0 512 512" fill="currentColor">
                            <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                            <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                        </svg>
            Contact Us
        </div>

                </div>
            </div>

        </div>
        )
    }
}

export default LeftNavigation;