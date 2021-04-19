import React, { Component } from "react";
import SideNavigationItems from '../../components/SideNavigation1/sideNavigationItems';
import './dashboard.css';
import * as actions from '../../store/Action/index';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import TopNavigation from '../../components/TopNavigation/TopNavigation';
import LeftNavigation from '../../components/LeftNavigation/LeftNavigation';
import Setting from '../Setting/Setting';
import Searcher from "../../components/Searcher/Searcher";
import axios from '../../axios';
import Popup from '../../components/Popup/Popup';
import ShowData from "../../components/ShowData/ShowData";

class Dashboard extends Component {
    state = {
        searched: false,
        number: {
            value: ''
        },
        profile: {
            name: '',
            mobile: '',
            dob: '',
            weight: '',
            height: '',
            blood: ''
        },
        prescriptions: [],
        reports: [],
        medicine: [],
        history: [],
        allergy: [],
        diesease: [],
        clicked: false,
        setting: false,
        dashboard: true,
    }
    popData = {
        title: null,
        link: null,
        type: null
    }

    componentDidMount() {
        document.body.classList.add('light-mode');
        console.log('i am called');
    }
    navigationClicked(type) {
        console.log('reaching here');
        switch (type) {
            case 'dashboard':
                console.log('dashboard option clicked');
                this.setState({
                    ...this.state,
                    setting: false,
                    dashboard: true
                })
                break;
            case 'setting':
                console.log('setting option clicked');
                this.setState({
                    ...this.state,
                    setting: true,
                    dashboard: false
                })
                break;
            default:
                break;
        }
    }
    recentSearch(event) {
        const num = {
            ...this.state.number
        }
        num.value = event.target.value;
        this.setState({
            ...this.state,
            number: {
                ...num
            }
        });
        console.log(this.state.number.value);
    }
    isNumeric(str) {
        return !isNaN(str);
    }
    submitHandler(event) {
        event.preventDefault();
        let number = this.state.number.value;
        console.log(number);
        if (number.length === 10 && this.isNumeric(number)) {
            let data = {
                token: this.props.token,
                number: number
            }

            axios.post('/search', data).then(res => {
                console.log(res.data);
                let profile = res.data.profile[0];
                console.log(res.data.report);
                let mobile = profile.mobile;
                let name = profile.name;
                let height = profile.height;
                let weight = profile.weight;
                let blood = profile.blood;
                let dob = profile.dob;
                let reports = res.data.report;
                let prescriptions = res.data.prescription;
                let medicine = res.data.medicine;
                let history = res.data.history;
                let allergy = res.data.allergy;
                let diesease = res.data.diesease;
                this.setState({
                    ...this.state,
                    profile: {
                        name: name,
                        mobile: mobile,
                        height: height,
                        weight: weight,
                        blood: blood,
                        dob: dob
                    },
                    reports: reports,
                    prescriptions: prescriptions,
                    history: history,
                    medicine: medicine,
                    allergy: allergy,
                    diesease: diesease,
                    searched: true
                })
            }).catch(err => {
                console.log(err);
            });
        }
        else {
            console.log('Number given is not in proper format');
        }
    }
    popupShow() {
        console.log('poper is reachable');
        this.setState({
            ...this.state,
            clicked: !this.state.clicked
        })
    }
    handleClick(){
        console.log('I am clicked');
    }
    popShowDialog(id, category) {
        // let arr = [];
        console.log(id, ' ', category);
        // if(category==='reports')
        // {
        //     arr=this.state.reports;
        // }
        // if(category==='prescriptions')
        // {
        //     arr=this.state.prescriptions;
        // }
        // let obj=arr.reduce(ele=>{
        //     return id===ele.id;
        // })
        // this.popData({
        //     title:obj.title,
        //     type:obj.type,
        //     link:obj.image
        // });
        // this.setState({
        //     ...this.state,
        //     clicked:!this.state.clicked
        // })
    }
    render() {
        console.log('rendering here');
        let dashy = null
        let content = null;
        let popup = null;
        if (this.state.searched === false && this.state.dashboard === true) {
            content = (<div className="row">
                    <Searcher
                        onchange={(e) => this.recentSearch(e)}
                        value={this.state.number.value}
                        handle={(type)=>this.navigationClicked(type)}
                        clicker={e => this.submitHandler(e)} />
            </div>);
        }
        else if (this.state.dashboard === true) {
            content = (<div>
                <div className="top-flex">
                    <button onClick={console.log('being clicked')}>Back to search</button>
                    <button onClick={console.log('being clicked')}>Setting</button>
                    <button onClick={console.log('being clicked')}>Dashboard</button>
                </div>
                <ShowData
                    profile={this.state.profile}
                    numP={new Array(this.state.prescriptions).length}
                    numR={new Array(this.state.reports).length}
                    medicine={this.state.medicine}
                    allergy={this.state.allergy}
                    diesease={this.state.diesease}
                    clicked={(id, type) => this.popShowDialog(id, type)}
                    reports={this.state.reports}
                    prescriptions={this.state.prescriptions}
                    history={this.state.history}
                />
            </div>
            );
        }
        else if (this.state.setting === true) {
            content = (
                <div>
                    <div className="top-flex">
                        <button onClick={console.log('being clicked')}>Back to search</button>
                        <button onClick={console.log('being clicked')}>Setting</button>
                        <button onClick={console.log('being clicked')}>Dashboard</button>
                    </div>
                    <Setting />
                </div>
            )
        }
        if (this.state.clicked) {
            popup = <Popup
                title={this.popData.title}
                type={this.popData.type}
                link={this.popData.link}
                clicked={() => this.popupShow()} />
        }
        if (this.props.token === null || this.props.token.length < 10) {
            console.log('getting here ', this.props.token);
            dashy = <Redirect to='/login' />
        }
        return (
            <>
                {dashy}
                <div className="app">
                    <TopNavigation enabled={this.state.searched} />
                    <div className="wrapper">
                        <LeftNavigation
                            clicked={(type) => this.navigationClicked(type)}
                        />
                        <div className="main-container">
                            <div className="content-wrapper">

                                {content}
                                {popup}
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

const mapStatetoProps = state => {
    return {
        msg: state.reducer1.msg,
        token: state.reducer1.token
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        logger: (email, password) => { dispatch(actions.login(email, password)) }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Dashboard);