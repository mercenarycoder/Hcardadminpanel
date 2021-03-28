import * as actionTypes from './Constants';
import axios from '../../axios';

export const authSuccess = (token) => {
    return {
        type: actionTypes.LOGIN,
        token: token
    }
}

export const logout=()=>{
    localStorage.setItem('token',null);
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const sendErrorMsg = (msg) => {
    return {
        type: actionTypes.ERROR,
        msg: msg
    }
}

export const login = (email, password) => {

    return (dispatch) => {
        const format = {
            email: email,
            password: password
        }
        axios.post('/login', format).then(res => {
            const status = res.data.status;
            if (status === 1) {
                const token = res.data.token;
                console.log(token);
                localStorage.setItem('token', token);
                dispatch(authSuccess(token));
            }
            else {
                const msg = res.data.msg;
                console.log(msg);
                dispatch(sendErrorMsg(msg));
            }
        }).catch(err => {
            console.log(err);
            dispatch(sendErrorMsg(err));
        })
    }
}
export const register = (fname, lname, email, file, fileName, password) => {
    return (dispatch) => {
        const format = {
            fname: fname,
            lname: lname,
            email: email,
            file: file,
            fileName: fileName,
            password: password
        }
        axios.post('/register', format).then(res => {
            const status = res.data.status;
            if (status == '1') {
                const token = res.data.token;
                localStorage.setItem('token', token);
                dispatch(authSuccess(token));
            }
            else {
                const msg = res.data.msg;
                dispatch(sendErrorMsg(msg));
            }
        }).catch(err => {
            console.log(err);
            dispatch(sendErrorMsg(err));
        })
    }
}

export const checkAuth = () => {
    return dispatch => {
        let token = localStorage.getItem('token');
        if (token) {
            dispatch(authSuccess(token));
        }
        else {
            dispatch(logout());
        }
    }
}