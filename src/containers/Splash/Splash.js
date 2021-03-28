import React,{Component} from 'react';
import {connect,Redirect} from 'react-router-dom';
import * as action from '../../store/Action/index';

class Splash extends Component{

    componentDidMount(){
        this.props.checkAuth();
    }
    render(){
        // let material=();
        if(this.props.token)
        {
            
        }
        return{

        }
    }
}

const mapStatetoProps=state=>{

    return{
        token:state.reducer1.token!==null
    }
}

const mapDispatchProps=dispatch=>{
    return{
        checkAuth:()=>dispatch(action.checkAuth())
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(Splash);