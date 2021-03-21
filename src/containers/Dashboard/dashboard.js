import React,{ Component } from "react";
import SideNavigationItems from '../../components/SideNavigation1/sideNavigationItems';

class Dashboard extends Component{

    render(){
        return(
            <div>
                <div>
                    <SideNavigationItems/>
                    
                <h1>Dashboard Page</h1>
                </div>
            </div>
        )
    }
}

export default Dashboard;