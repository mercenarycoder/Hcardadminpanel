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
export const register = (fname, lname, email, file, fileName, password,account) => {
    return (dispatch) => {
        const format = {
            fname: fname,
            lname: lname,
            email: email,
            image: file,
            token: fileName,
            password: password
        }
        const formData=new FormData();
        formData.append('fname',fname);
        formData.append('lname',lname);
        formData.append('email',email);
        formData.append('image',file);
        formData.append('password',password);
        formData.append('token',fileName);
        formData.append('account',account);
        axios.post('/register', formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        }).then(res => {
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
        });
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