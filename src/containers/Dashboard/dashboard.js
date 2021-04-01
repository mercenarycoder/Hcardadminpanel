import React, { Component } from "react";
import SideNavigationItems from '../../components/SideNavigation1/sideNavigationItems';
import './dashboard.css';
import * as actions from '../../store/Action/index';
import { } from 'react-router-dom';
import { connect } from 'react-redux'
import TopNavigation from '../../components/TopNavigation/TopNavigation';
import LeftNavigation from '../../components/LeftNavigation/LeftNavigation';
import RightNavigation from "../../components/RightNavigation/RightNavigation";
import Medications from "../../components/Medications/Medications";
import Allergies from "../../components/Allergies/Allergies";
import Dieseas from "../../components/Dieseas/Dieseas";
import Reports from "../../components/Reports/Reports";
import Prescriptions from "../../components/Prescriptions/Prescriptions";
import History from "../../components/History/History";
import Profile from "../../components/Profile/Profile";


class Dashboard extends Component {
    componentDidMount(){
        document.body.classList.add('light-mode');
    }
    render() {
        return (
            <>
                <div className="app">
                    <TopNavigation />
                    <div className="wrapper">
                        <LeftNavigation />
                        <div className="main-container">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="content-section">
                                            <Profile />
                                        </div>
                                        <div className="content-section">
                                            <Medications />
                                        </div>
                                        <div className="content-section">
                                            <Allergies />
                                        </div>
                                        <div className="content-section">
                                            <Dieseas />
                                        </div>
                                        <div className="content-section">
                                            <Reports />
                                        </div>
                                        <div className="content-section">
                                            <Prescriptions />
                                        </div>
                                        <div className="content-section">
                                            <History />
                                        </div>
                                    </div>
                                    <RightNavigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                                <SideNavigationItems />
                                <h1>Dashboard Page</h1>
                            </div> */}
            </>)
    }
}



export default (Dashboard);