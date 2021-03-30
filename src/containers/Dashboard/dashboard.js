import React, { Component } from "react";
import SideNavigationItems from '../../components/SideNavigation1/sideNavigationItems';
import './dashboard.css';
import * as actions from '../../store/Action/index';
import { } from 'react-router-dom';
import { connect } from 'react-redux'

class Dashboard extends Component {

    render() {
        return(
            <>
            <div className="app">
            <div className="header">
            <div className="menu-circle"><img src="http://localhost:3000/3dlogo.png" className='logo-image' />
            </div>
            <div className="header-menu">
                <a className="menu-link is-active" href="#">Overview</a>
                <a className="menu-link notify" href="#">Reports</a>
                <a className="menu-link" href="#">Prescriptions</a> 
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="header-profile">
                <div className="notification">
                    <span className="notification-number">3</span>
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                </div>
                 <a className="log" href="login.html"><img className="profile-img" src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
				<div className="logout">Logout</div></a>
            </div>
            </div>
            <div className="wrapper">
            <div className="left-side">
                <div className="side-wrapper">
                    <div className="side-title">Headth Studio</div>
                    <div className="side-menu">
                        <a href="index.html">
                            <svg viewBox="0 0 512 512">
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                                </g>
                                <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
                                <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
                            </svg>
                            Dashboard
                        </a>
                    </div>
                </div>
                <div className="side-wrapper">
                    <div className="side-title">Settings</div>
                    <div className="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 332 332" fill="currentColor">
                                <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                            </svg>
                            Profile Edit
                        </a>
                    </div>
                </div>
				
				<div className="side-wrapper">
                    <div className="side-title">Membership Code</div>
                    <div className="side-menu">
                        <a href="#">
                            
                            #WIP002
                        </a>
                    </div>
                </div>
				
                <div className="side-wrapper">
                    <div className="side-title">Resource Links</div>
                    <div className="side-menu">
                        <a href="#">
                            <svg viewBox="0 0 512 512" fill="currentColor">
                                <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                                <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                            </svg>
                            Contact Us
                        </a>
                       
                    </div>
                </div>
			
            </div>
            <div className="main-container">
          
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-md-8">
						
						    <div className="content-section">
                                <div className="content-section-title">Profile</div>
                               <div className="col-md-12 profile">
							   <!--   Box Two   -->
      <div className="box__two">
        <div className="transaction">
		 
          <div className="transaction__title">
		    <img className="proile-img" src="https://source.unsplash.com/kbjIOft9Dbg" height="60" width="60" style="float:left;margin-right:15px;">
            <h3>Raghav Patnecha</h3>
            <p> <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span></p>
          </div>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png" height="100" width="100">
        </div>
        <div className="transaction">
          <div className="transaction__title">
		  <h5>Blood Group : O+<h5>
		   <p className="balance__text">Age : 22</p>
           <p className="balance__text">Address : 547, High Street, Balewadi, Baner</p>
            <p className="balance__text">raghavpatnecha06@gmail.com</p>
          </div>
          <p>Emergency contact: ****3643</p>
        </div>
        <div className="images">
         <div className="days-left" style="color: #4067f9;background:rgb(64 103 249 / 30%);">
           10 reports
          </div>
		  <div className="days-left" style="color: #df3670;background:rgb(223 54 112 / 23%);">
            5 prescriptions
          </div>
		  <div className="days-left" style="color: #4067f9;background:rgb(64 103 249 / 30%);">
            Last Test Date : 3 days ago
          </div>
		  <div className="days-left" style="color: #34c471;background:rgb(52 196 106 / 15%);">
            High Blood Pressure
          </div>
		 
        </div><br/>
		   <div className="images">
         <div className="days-left" style="color: #4067f9;background:rgb(64 103 249 / 30%);">
           Last Hospital Visit : Fortis, Pune
          </div>
		  
		  <div className="days-left" style="color: #096c86;background:rgb(9 108 134 / 25%);">
            Diabetic
          </div>
		 
        </div>
         <button className="content-button">Emergency Notify</button>
      </div>
			</div>
            </div>
							
						<!-- Medications -->
                            <div className="content-section">
                                <div className="content-section-title">Medications</div>
                                <ul>
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#061e26" data-original="#393687"></path>
                                                    <path d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z" fill="#c1dbe6" data-original="#89d3ff"></path>
                                                </g>
                                            </svg>
                                            Alendronate
                                        </div>
                                        <span className="status">
                                        <span className="status-circle green"></span>
                                        500mg</span><span>Pill</span>
                                        <div className="button-wrapper">
                                          <span>Lupin</span>             
                                        </div>
                                    </li>
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#261400" data-original="#6d4c13"></path>
                                                    <path d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z" fill="#e6d2c0" data-original="#ffbd2e"></path>
                                                </g>
                                            </svg>
                                            Ibandronate
                                        </div>
                                        <span className="status">
                                        <span className="status-circle"></span>
                                        150mg</span><span>Syrop</span>
                                        <div className="button-wrapper">
                                           <span>Pfizer</span>
                                        </div>
                                    </li>
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                                                    <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
                                                </g>
                                            </svg>
                                            Paracetamol
                                        </div>
                                        <span className="status">
                                        <span className="status-circle green"></span>
                                        500mg</span><span>Tablet</span>
                                        <div className="button-wrapper">
                                           <span>Cipla</span>	 
                                        </div>
                                    </li>
                                </ul>
                            </div>
							
                            <div className="content-section">
                                <div className="content-section-title">Common &amp; Medication Allergies</div>
                                <div className="apps-card">
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
                                                <path xmlns="http://www.w3.org/2000/svg" d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z" fill="#210027" data-original="#7b1fa2"></path>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z" fill="#f6e7fa" data-original="#e1bee7"></path>
                                                </g>
                                            </svg>
                                            Penicillin
                                        </span>
                                        <div className="app-card__subtext days-left" style="color: #df3670;background:rgb(223 54 112 / 23%);">High</div>
                                       
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #c1316d">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#2f0015" data-original="#6f2b41"></path>
                                                    <path d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z" fill="#e1c1cf" data-original="#ff70bd"></path>
                                                </g>
                                            </svg>
                                            Tilorone
                                        </span>
                                        <div className="app-card__subtext days-left" style="color: #34c471;background:rgb(52 196 106 / 15%);">Medium</div>
                                       
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                                                    <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
                                                </g>
                                            </svg>
                                            Aspirin
                                        </span>
                                        <div className="app-card__subtext days-left" style="color: #df3670;background:rgb(223 54 112 / 23%);">High</div>
                                       
                                    </div>
                                </div>
                            </div>
							<!-- Diseases -->
							
							<div className="content-section">
                                <div className="content-section-title">Chronic Diseases</div>
                                <div className="apps-card">
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 512 512" style="border: 1px solid #a059a9">
                                                <path xmlns="http://www.w3.org/2000/svg" d="M480 0H32C14.368 0 0 14.368 0 32v448c0 17.664 14.368 32 32 32h448c17.664 0 32-14.336 32-32V32c0-17.632-14.336-32-32-32z" fill="#210027" data-original="#7b1fa2"></path>
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M192 64h-80c-8.832 0-16 7.168-16 16v352c0 8.832 7.168 16 16 16s16-7.168 16-16V256h64c52.928 0 96-43.072 96-96s-43.072-96-96-96zm0 160h-64V96h64c35.296 0 64 28.704 64 64s-28.704 64-64 64zM400 256h-32c-18.08 0-34.592 6.24-48 16.384V272c0-8.864-7.168-16-16-16s-16 7.136-16 16v160c0 8.832 7.168 16 16 16s16-7.168 16-16v-96c0-26.464 21.536-48 48-48h32c8.832 0 16-7.168 16-16s-7.168-16-16-16z" fill="#f6e7fa" data-original="#e1bee7"></path>
                                                </g>
                                            </svg>
                                            Osteoporosis
                                        </span>
                                        <div className="app-card__subtext">Ongoing Treatment</div>
                                        <div className="app-card-buttons">
										    <div className="days-left">21 Jan 2020</div>
                                           
                                            
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #c1316d">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#2f0015" data-original="#6f2b41"></path>
                                                    <path d="M18.08 39H15.2V13.72l-2.64-.08V11h5.52v28zM27.68 19.4c1.173-.507 2.593-.761 4.26-.761s3.073.374 4.22 1.12V11h2.88v28c-2.293.32-4.414.48-6.36.48-1.947 0-3.707-.4-5.28-1.2-2.08-1.066-3.12-2.92-3.12-5.561v-7.56c0-2.799 1.133-4.719 3.4-5.759zm8.48 3.12c-1.387-.746-2.907-1.119-4.56-1.119-1.574 0-2.714.406-3.42 1.22-.707.813-1.06 1.847-1.06 3.1v7.12c0 1.227.44 2.188 1.32 2.88.96.719 2.146 1.079 3.56 1.079 1.413 0 2.8-.106 4.16-.319V22.52z" fill="#e1c1cf" data-original="#ff70bd"></path>
                                                </g>
                                            </svg>
                                            Heart Defect
                                        </span>
                                        <div className="app-card__subtext">Incurable</div>
                                        <div className="app-card-buttons">
										<div className="days-left">Congenital</div>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                                                    <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
                                                </g>
                                            </svg>
                                            Edwards' syndrome
                                        </span>
                                        <div className="app-card__subtext">Incurable</div>
                                        <div className="app-card-buttons">
										<div className="days-left">Congenital</div>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
							<!-- Diseases End -->
							
							<!-- Reports -->
							
							<div className="content-section">
                                <div className="content-section-title">Recent Reports</div>
                                <div className="apps-card">
                                    <div className="app-card">
                                        <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FFEDBE;" d="M339.053,512H68.096c-11.28,0-20.426-9.145-20.426-20.426V20.426C47.67,9.145,56.816,0,68.096,0  h375.788c11.28,0,20.426,9.145,20.426,20.426v366.32c0,5.418-2.151,10.613-5.983,14.444L353.496,506.018  C349.666,509.849,344.47,512,339.053,512z"/>
<path style="fill:#FFE49C;" d="M443.882,0H255.989v512h83.064c5.418,0,10.613-2.151,14.444-5.983l104.829-104.829  c3.832-3.83,5.983-9.025,5.983-14.444V20.426C464.308,9.145,455.164,0,443.882,0z"/>
<g>
	<path style="fill:#FFBE00;" d="M222.855,365.392h-80.613c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h80.613   c11.28,0,20.426,9.145,20.426,20.426S234.135,365.392,222.855,365.392z"/>
	<path style="fill:#FFBE00;" d="M255.989,428.076H142.242c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h113.747   c11.28,0,20.426,9.145,20.426,20.426S267.269,428.076,255.989,428.076z"/>
	<path style="fill:#FFBE00;" d="M218.015,276.426H151.03c-16.383,0-29.711-13.328-29.711-29.711v-40.746   c0-58.439,47.544-105.981,105.983-105.981c11.28,0,20.426,9.145,20.426,20.426v126.302   C247.728,263.097,234.398,276.426,218.015,276.426z M162.171,235.574h44.706v-91.457c-25.94,8.588-44.706,33.069-44.706,61.851   V235.574z"/>
</g>
<g>
	<path style="fill:#FFB700;" d="M339.049,512c-11.245,0-20.421-9.126-20.421-20.426V386.745c0-11.28,9.145-20.426,20.426-20.426   h104.829c18.126,0,27.302,22.009,14.442,34.869L353.495,506.018C349.588,509.926,344.364,512,339.049,512z"/>
	<path style="fill:#FFB700;" d="M255.989,387.225v40.851c11.28,0,20.426-9.145,20.426-20.426S267.269,387.225,255.989,387.225z"/>
	<path style="fill:#FFB700;" d="M360.948,276.426h-66.985c-16.383,0-29.711-13.328-29.711-29.711V120.413   c0-11.28,9.145-20.426,20.426-20.426c58.439,0,105.983,47.542,105.983,105.981v40.746   C390.659,263.097,377.33,276.426,360.948,276.426z M305.102,235.574h44.706v-29.606c0-28.782-18.766-53.263-44.706-61.851V235.574   L305.102,235.574z"/>
</g>

</svg>
                                            Left Arm X-Ray
                                        </span>
                                        <div className="app-card__subtext">Fracture of both ulna and radius.</div>
                                        <div className="app-card-buttons">
                                             <div className="reporter">Sahyadri Speciality Labs Lab</div>
                                            <button className="content-button status-button">View</button>
											 
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FFEDBE;" d="M339.053,512H68.096c-11.28,0-20.426-9.145-20.426-20.426V20.426C47.67,9.145,56.816,0,68.096,0  h375.788c11.28,0,20.426,9.145,20.426,20.426v366.32c0,5.418-2.151,10.613-5.983,14.444L353.496,506.018  C349.666,509.849,344.47,512,339.053,512z"/>
<path style="fill:#FFE49C;" d="M443.882,0H255.989v512h83.064c5.418,0,10.613-2.151,14.444-5.983l104.829-104.829  c3.832-3.83,5.983-9.025,5.983-14.444V20.426C464.308,9.145,455.164,0,443.882,0z"/>
<g>
	<path style="fill:#FFBE00;" d="M222.855,365.392h-80.613c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h80.613   c11.28,0,20.426,9.145,20.426,20.426S234.135,365.392,222.855,365.392z"/>
	<path style="fill:#FFBE00;" d="M255.989,428.076H142.242c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h113.747   c11.28,0,20.426,9.145,20.426,20.426S267.269,428.076,255.989,428.076z"/>
	<path style="fill:#FFBE00;" d="M218.015,276.426H151.03c-16.383,0-29.711-13.328-29.711-29.711v-40.746   c0-58.439,47.544-105.981,105.983-105.981c11.28,0,20.426,9.145,20.426,20.426v126.302   C247.728,263.097,234.398,276.426,218.015,276.426z M162.171,235.574h44.706v-91.457c-25.94,8.588-44.706,33.069-44.706,61.851   V235.574z"/>
</g>
<g>
	<path style="fill:#FFB700;" d="M339.049,512c-11.245,0-20.421-9.126-20.421-20.426V386.745c0-11.28,9.145-20.426,20.426-20.426   h104.829c18.126,0,27.302,22.009,14.442,34.869L353.495,506.018C349.588,509.926,344.364,512,339.049,512z"/>
	<path style="fill:#FFB700;" d="M255.989,387.225v40.851c11.28,0,20.426-9.145,20.426-20.426S267.269,387.225,255.989,387.225z"/>
	<path style="fill:#FFB700;" d="M360.948,276.426h-66.985c-16.383,0-29.711-13.328-29.711-29.711V120.413   c0-11.28,9.145-20.426,20.426-20.426c58.439,0,105.983,47.542,105.983,105.981v40.746   C390.659,263.097,377.33,276.426,360.948,276.426z M305.102,235.574h44.706v-29.606c0-28.782-18.766-53.263-44.706-61.851V235.574   L305.102,235.574z"/>
</g>

</svg>
                                            Blood Examination
                                        </span>
                                        <div className="app-card__subtext">The volume of RBC was within average range</div>
                                        <div className="app-card-buttons">
										    <div className="reporter">Dr. Lal Path Labs</div>
                                            <button className="content-button status-button">View</button>
                                           
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<path style="fill:#FFEDBE;" d="M339.053,512H68.096c-11.28,0-20.426-9.145-20.426-20.426V20.426C47.67,9.145,56.816,0,68.096,0  h375.788c11.28,0,20.426,9.145,20.426,20.426v366.32c0,5.418-2.151,10.613-5.983,14.444L353.496,506.018  C349.666,509.849,344.47,512,339.053,512z"/>
<path style="fill:#FFE49C;" d="M443.882,0H255.989v512h83.064c5.418,0,10.613-2.151,14.444-5.983l104.829-104.829  c3.832-3.83,5.983-9.025,5.983-14.444V20.426C464.308,9.145,455.164,0,443.882,0z"/>
<g>
	<path style="fill:#FFBE00;" d="M222.855,365.392h-80.613c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h80.613   c11.28,0,20.426,9.145,20.426,20.426S234.135,365.392,222.855,365.392z"/>
	<path style="fill:#FFBE00;" d="M255.989,428.076H142.242c-11.28,0-20.426-9.145-20.426-20.426s9.145-20.426,20.426-20.426h113.747   c11.28,0,20.426,9.145,20.426,20.426S267.269,428.076,255.989,428.076z"/>
	<path style="fill:#FFBE00;" d="M218.015,276.426H151.03c-16.383,0-29.711-13.328-29.711-29.711v-40.746   c0-58.439,47.544-105.981,105.983-105.981c11.28,0,20.426,9.145,20.426,20.426v126.302   C247.728,263.097,234.398,276.426,218.015,276.426z M162.171,235.574h44.706v-91.457c-25.94,8.588-44.706,33.069-44.706,61.851   V235.574z"/>
</g>
<g>
	<path style="fill:#FFB700;" d="M339.049,512c-11.245,0-20.421-9.126-20.421-20.426V386.745c0-11.28,9.145-20.426,20.426-20.426   h104.829c18.126,0,27.302,22.009,14.442,34.869L353.495,506.018C349.588,509.926,344.364,512,339.049,512z"/>
	<path style="fill:#FFB700;" d="M255.989,387.225v40.851c11.28,0,20.426-9.145,20.426-20.426S267.269,387.225,255.989,387.225z"/>
	<path style="fill:#FFB700;" d="M360.948,276.426h-66.985c-16.383,0-29.711-13.328-29.711-29.711V120.413   c0-11.28,9.145-20.426,20.426-20.426c58.439,0,105.983,47.542,105.983,105.981v40.746   C390.659,263.097,377.33,276.426,360.948,276.426z M305.102,235.574h44.706v-29.606c0-28.782-18.766-53.263-44.706-61.851V235.574   L305.102,235.574z"/>
</g>

</svg>
                                            Pathology Report
                                        </span>
                                        <div className="app-card__subtext">Grover's disease favoured.</div>
                                        <div className="app-card-buttons">
                                             <div className="reporter">Self Uploaded</div>
                                            <button className="content-button status-button">View</button>
											
                                        </div>
                                    </div>
                                </div>
                            </div>
							
							
							
							<!-- Reports End -->
							
							<!-- Prescriptions -->
							
							 <div className="content-section">
                                <div className="content-section-title">Recent Prescriptions</div>
                                <div className="apps-card">
                                    <div className="app-card">
                                        <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"  viewBox="0 0 512 512" width="512"><g><g id="Docs_3_"><g><g><g><g><path d="m451 135-105-30-30-105h-210c-24.853 0-45 20.147-45 45v422c0 24.853 20.147 45 45 45h300c24.853 0 45-20.147 45-45z" fill="#4086f4"/></g></g></g></g><path d="m451 135v332c0 24.853-20.147 45-45 45h-150v-512h60l30 105z" fill="#4175df"/><path d="m451 135h-105c-16.5 0-30-13.5-30-30v-105c3.9 0 7.8 1.5 10.499 4.501l120 120c3.001 2.699 4.501 6.599 4.501 10.499z" fill="#80aef8"/><g><path d="m346 241h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 301h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 361h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m286 421h-120c-8.291 0-15-6.709-15-15s6.709-15 15-15h120c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g></g><g id="Docs_4_"><g><g><path d="m256 421h30c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30z" fill="#e3e7ea"/></g><g><path d="m256 361h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 301h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 241h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g></g></g></g></svg>
                                            Prescribed - 04.02.2021
                                        </span>
                                        <div className="app-card__subtext">Dr. Seema Gulati - Cardiologist</div>
                                        <div className="app-card-buttons">
                                             <div className="reporter">Self Uploaded</div>
                                            <button className="content-button pres">View</button>
											
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 512 512" width="512"><g><g id="Docs_3_"><g><g><g><g><path d="m451 135-105-30-30-105h-210c-24.853 0-45 20.147-45 45v422c0 24.853 20.147 45 45 45h300c24.853 0 45-20.147 45-45z" fill="#4086f4"/></g></g></g></g><path d="m451 135v332c0 24.853-20.147 45-45 45h-150v-512h60l30 105z" fill="#4175df"/><path d="m451 135h-105c-16.5 0-30-13.5-30-30v-105c3.9 0 7.8 1.5 10.499 4.501l120 120c3.001 2.699 4.501 6.599 4.501 10.499z" fill="#80aef8"/><g><path d="m346 241h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 301h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 361h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m286 421h-120c-8.291 0-15-6.709-15-15s6.709-15 15-15h120c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g></g><g id="Docs_4_"><g><g><path d="m256 421h30c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30z" fill="#e3e7ea"/></g><g><path d="m256 361h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 301h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 241h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g></g></g></g></svg>
                                            Prescribed - 04.02.2021
                                        </span>
                                        <div className="app-card__subtext">Dr. Manu Jhoshi - Physician</div>
                                        <div className="app-card-buttons">
										    <div className="reporter">Self Uploaded</div>
                                            <button className="content-button pres">View</button>
                                          
                                        </div>
                                    </div>
                                    <div className="app-card">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"  viewBox="0 0 512 512" width="512"><g><g id="Docs_3_"><g><g><g><g><path d="m451 135-105-30-30-105h-210c-24.853 0-45 20.147-45 45v422c0 24.853 20.147 45 45 45h300c24.853 0 45-20.147 45-45z" fill="#4086f4"/></g></g></g></g><path d="m451 135v332c0 24.853-20.147 45-45 45h-150v-512h60l30 105z" fill="#4175df"/><path d="m451 135h-105c-16.5 0-30-13.5-30-30v-105c3.9 0 7.8 1.5 10.499 4.501l120 120c3.001 2.699 4.501 6.599 4.501 10.499z" fill="#80aef8"/><g><path d="m346 241h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 301h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 361h-180c-8.291 0-15-6.709-15-15s6.709-15 15-15h180c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m286 421h-120c-8.291 0-15-6.709-15-15s6.709-15 15-15h120c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g></g><g id="Docs_4_"><g><g><path d="m256 421h30c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30z" fill="#e3e7ea"/></g><g><path d="m256 361h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 301h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g><g><path d="m256 241h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z" fill="#e3e7ea"/></g></g></g></g></svg>
                                            Prescribed - 04.02.2021
                                        </span>
                                        <div className="app-card__subtext">Dr. Chirayu Mundra - Dentist</div>
                                        <div className="app-card-buttons">
                                             <div className="reporter">Self Uploaded</div>
                                            <button className="content-button pres">View</button>
											
                                        </div>
                                    </div>
                                </div>
                            </div>
							
							<!-- Pop up -->
							<div className="pop-up">
                                                <div className="pop-up__title">
                                                   
                                                    <svg className="close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M15 9l-6 6M9 9l6 6"></path>
                                                    </svg>
                                                </div>
                                                <div className="pop-up__subtitle"></div>
                                                <img src="https://www.sandlakeimaging.com/wp-content/uploads/2016/12/Xray-300x247.jpg">
                                               
                                            </div>
											
							<div className="prescriptions">
                                                <div className="pop-up__title">
                                                   
                                                    <svg className="close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <path d="M15 9l-6 6M9 9l6 6"></path>
                                                    </svg>
                                                </div>
                                                <div className="pop-up__subtitle"></div>
                                                <img src="https://as2.ftcdn.net/jpg/00/56/61/71/500_F_56617167_ZGbrr3mHPUmLoksQmpuY7SPA8ihTI5Dh.jpg" height="300px;">
                                               
                                            </div>				
							
							<!-- Pop up End -->
							
							<!-- Precscriptions End -->
							
							<!-- History -->
							
							 <div className="content-section">
                                <div className="content-section-title">Diagnosis History</div>
                                <ul>
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border:1px solid #3291b8">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#061e26" data-original="#393687"></path>
                                                    <path d="M12.16 39H9.28V11h9.64c2.613 0 4.553.813 5.82 2.44 1.266 1.626 1.9 3.76 1.9 6.399 0 .934-.027 1.74-.08 2.42-.054.681-.22 1.534-.5 2.561-.28 1.026-.66 1.866-1.14 2.52-.48.654-1.213 1.227-2.2 1.72-.987.494-2.16.74-3.52.74h-7.04V39zm0-12h6.68c.96 0 1.773-.187 2.44-.56.666-.374 1.153-.773 1.46-1.2.306-.427.546-1.04.72-1.84.173-.801.267-1.4.28-1.801.013-.399.02-.973.02-1.72 0-4.053-1.694-6.08-5.08-6.08h-6.52V27zM29.48 33.92l2.8-.12c.106.987.6 1.754 1.48 2.3.88.547 1.893.82 3.04.82s2.14-.26 2.98-.78c.84-.52 1.26-1.266 1.26-2.239s-.36-1.747-1.08-2.32c-.72-.573-1.6-1.026-2.64-1.36-1.04-.333-2.086-.686-3.14-1.06a7.36 7.36 0 01-2.78-1.76c-.987-.934-1.48-2.073-1.48-3.42s.54-2.601 1.62-3.761 2.833-1.739 5.26-1.739c.854 0 1.653.1 2.4.3.746.2 1.28.394 1.6.58l.48.279-.92 2.521c-.854-.666-1.974-1-3.36-1-1.387 0-2.42.26-3.1.78-.68.52-1.02 1.18-1.02 1.979 0 .88.426 1.574 1.28 2.08.853.507 1.813.934 2.88 1.28 1.066.347 2.126.733 3.18 1.16 1.053.427 1.946 1.094 2.68 2s1.1 2.106 1.1 3.6c0 1.494-.6 2.794-1.8 3.9-1.2 1.106-2.954 1.66-5.26 1.66-2.307 0-4.114-.547-5.42-1.64-1.307-1.093-1.987-2.44-2.04-4.04z" fill="#c1dbe6" data-original="#89d3ff"></path>
                                                </g>
                                            </svg>
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
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border:1px solid #b65a0b">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#261400" data-original="#6d4c13"></path>
                                                    <path d="M30.68 39h-3.24l-2.76-9.04h-8.32L13.72 39H10.6l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L17.12 27h6.84zM37.479 12.24c0 .453-.16.84-.48 1.16-.32.319-.7.479-1.14.479-.44 0-.827-.166-1.16-.5-.334-.333-.5-.713-.5-1.14s.166-.807.5-1.141c.333-.333.72-.5 1.16-.5.44 0 .82.16 1.14.48.321.322.48.709.48 1.162zM37.24 39h-2.88V18.96h2.88V39z" fill="#e6d2c0" data-original="#ffbd2e"></path>
                                                </g>
                                            </svg>
                                            Acute Bronchitis
                                        </div>
                                        <span className="status">
                                        <span className="status-circle"></span>
                                        Dr. Manoj Mathur</span>
                                        <div className="button-wrapper">
                                            <button className="content-button status-button open">Antibiotic Treatment</button>
                                            
                                            <div className="menu">
                                                <button className="dropdown">
                                                    <ul>
                                                        <li><a href="#">2 Dec 2020</a></li>
                                                        <li><a href="#">Learn more</a></li>
                                                      
                                                    </ul>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="adobe-product">
                                        <div className="products">
                                            <svg viewBox="0 0 52 52" style="border: 1px solid #C75DEB">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z" fill="#3a3375" data-original="#3a3375"></path>
                                                    <path d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z" fill="#e4d1eb" data-original="#e7adfb"></path>
                                                </g>
                                            </svg>
                                            Rotator cut off injury
                                        </div>
                                        <span className="status">
                                        <span className="status-circle green"></span>
                                        Dr. LalPath Labs</span>
                                        <div className="button-wrapper">
                                            <button className="content-button status-button open">Imaging</button>
                                            <div className="menu">
                                                <button className="dropdown">
                                                    <ul>
                                                       <li><a href="#">12 Feb 2021</a></li>
                                                        <li><a href="#">Learn more</a></li>
                                                        
                                                    </ul>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
							
							<!-- History End -->
							
                        </div>
                        <div className="col-md-4">
						
                            <div className="messages-section">
                                <button className="messages-close">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x-circle">
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
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">Stephanie</div>
                                                <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                            
                                            <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
  
  
                                            </p>
                                        </div>
                                    </div>
                                    <div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">Mark</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">Jessica</div>
                                                <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
									<div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
									<div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
									<div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
									<div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
									<div className="message-box">
                                        <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="profile image">
                                        <div className="message-content">
                                            <div className="message-header">
                                                <div className="name">David</div>
                                               <div className="content-button  view-patient">  
                                                       View                                                
                                                </div>
                                            </div>
                                           
                                            <p className="message-line time">
                                                <p className="message-line time">
                             <svg viewBox="-83.5 0 500 500" style="width: 15px;">
							  <g fill-rule="evenodd">
								<path d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z" />
							  </g>
							  </svg> <span>Bhopal, India</span>
                                            </p>
                                        </div>
                                    </div>
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            </div>
            </div>
            
                            {/* <div>
                                <SideNavigationItems />
                                <h1>Dashboard Page</h1>
                            </div> */}
            </> )
    }
}



export default (Dashboard);