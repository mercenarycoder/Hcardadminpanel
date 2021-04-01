import React, { Component } from "react";
import { NavLink,Redirect } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import './register.css';
import * as actions from '../../store/Action/index';

class Register extends Component {
    state = {
        orderForm: {
            fname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                label: 'First Name',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }, lname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                label: 'Last Name',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: ''
                },
                label: 'E-mail',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ''
                },
                label: 'Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 16
                },
                valid: false,
                touched: false
            },
            cpassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ''
                },
                label: 'Confirm Password',
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 16
                },
                valid: false,
                touched: false
            },
            userType: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'doctor', displayValue: 'Doctor' },
                        { value: 'corporate', displayValue: 'Corporate' }
                    ]
                },
                value: 'doctor',
                validation: {},
                valid: true
            },
            filetype: {
                elementType: 'file',
                elementConfig: {
                    type: 'file',
                    placeholder: ''
                },
                label: 'Choose a verification file',
                value: '',
                validation: {},
                touched: false
            },
            checkType: {
                elementType: 'checkbox',
                elementConfig: {

                },
                label: '',
                value: '',
                validation: {},
                touched: false
            }
        },
        formIsValid: false
    }
    orderHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const auth = {
            // ingredients: this.props.ings,
            // price: this.props.price,
            orderData: formData
        }
        console.log('working fine');
        // this.props.onOrderBurger(order);
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} encType='multipart/form-data'>
                {formElementsArray.map(formElement => (
                    <div className='row'>
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        label={formElement.config.label}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                        </div>
                ))}
                <Button disabled={!this.state.formIsValid}>Register Yourself</Button>
            </form>
        );
        if (this.props.token !== null && this.props.token.length > 10) {
            console.log('getting here ', this.props.token);
            form = <Redirect to='/' />
        }
        return (
            <div className='register body'>
                <div className="login-box">
                    <img src="http://localhost:3000/3dlogo.png" alt='logo' className='img' />
                    <div className="login-box-formbox">
                        <div className="login-box-signup">
                            Already a member? <a href="login.html">Sign in</a>
                        </div>
                        <div className="login-box-login">
                            <h1>Create Your Headth Account</h1>
                            {form}
                            {/* <form action="#">
        <div className="row">
            <p className="col-nmd-6">
                <label htmlFor="first-name"> First Name</label>
                <input type="text" name="first-name" className="" />
            </p>

            <p className="col-md-6">
                <label for="last-name"> Last Name</label>
                <input type="email" name="last-name" className="" />
            </p>
        </div>                
        <div class="row">
            <p class="col-md-12"> <label for="email"> E-Mail</label>
            <input type="email" name="email" className="input-email" /><span className="extern-type">We'll keep this private.</span></p>
        </div>
        <div className="row">
            <p className="col-md-6"> <label for="password"> Password</label>
            <input type="password" name="password" className="input-password" /><span className="extern-type">Atleast 8 characters long.</span></p>


            <p className="col-md-6"> <label for="retype-password"> Retype Password</label>
            <input type="password" name="retype-password" className="input-password" />
            <span className="extern-type">Atleast 8 characters long.</span></p>
        </div>

        <div className="row">
            <p className="col-md-6"><label for="organization">Institution/Organization name</label>
            <input type="email" name="organization" className="" /></p>
            <p className="col-md-6">
            <label for="user-role"> User Role</label>
            <select>
                <option value="0" selected disabled>Select Role</option>
                <option value="1">Institution</option>
                <option value="1">Doctor/Hospital</option>
            </select>
            </p>
        </div>
        <div className="row">
            <p className="col-md-12"> Upload verification document
                <input type="file" name="fileToUpload" id="fileToUpload" /> 
            </p>
        </div>

        <div className="row">
            <p className="col-md-12">
                <input type="checkbox" id="register-agree" className="input-toggle" />
                <span className="info">Do you agree to the <NavLink to="#">terms and conditions?</NavLink></span>
            </p>
            </div>
            <div>
        <NavLink to="index.html"> <input type="button" value="Sign me up" className="btnn" /></NavLink>
            </div>
        </form> */}
                        </div>
                    </div>
                    <div className="login-box-quotebox">
                        <div className="quote-container">


                        </div>
                    </div>
                </div>
            </div>
        )
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


export default connect(mapStatetoProps, mapDispatchtoProps)(Register);