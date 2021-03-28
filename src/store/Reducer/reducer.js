import * as actionTypes from '../Action/Constants';

const initialState = {
    token:null,
    msg:null,
    loading:false,
    authRedirectPath:'/'
};

const logger=(state,action)=>{
    return{
        ...state,
        token:action.token,
        msg:null,
        loading:false
    }
}
const error=(state,action)=>{
    return{
        ...state,
        token:null,
        msg:action.msg,
        loading:false
    }
}
const logout=(state,action)=>{
    return{
        ...state,
        token:null,
        msg:null,
        loading:false
    }
}

const reducer = ( state=initialState , action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:return logger(state,action);
        case actionTypes.REGISTER:return logger(state,action);
        case actionTypes.ERROR:return error(state,action);
        case actionTypes.AUTH_LOGOUT:return logout(state,action);
        default:return state
    }
};

export default reducer;