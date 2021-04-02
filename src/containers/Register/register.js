import React, { Component } from "react";
import { NavLink, Redirect } from 'react-router-dom';
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
            image: {
                elementType: 'file',
                elementConfig: {
                    type: 'file',
                    // name: 'file'
                },
                label: 'Choose a verification file',
                value: '',
                file: null,
                validation: {
                    required: true,
                    isFile: true
                },
                touched: false
            },
            checkType: {
                elementType: 'checkbox',
                elementConfig: {
                    type: 'checkbox'
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
            if (formElementIdentifier === 'image') {
                formData['image'] = this.state.orderForm[formElementIdentifier].file;
            }
            console.log(this.state.orderForm[formElementIdentifier].value);
        }
        // const auth = {
        //     fname:formData['fname'],
        //     lname:formData['lname'],
        //     email:formData['email'],
        //     password:formData['password'],
        //     image:
        // }
        console.log('working fine');
        // this.props.onOrderBurger(order);
        if (this.state.formIsValid) {
            console.log('valid');
            // email,password,fname,lname,file
            this.props.register(formData['email'], formData['password'], formData['fname'], formData['lname'], formData['image'],formData['userType']);
        }
        else {
            console.log("invalid");
            alert('Please fill in all the details');
        }
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required && !rules.isFile) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isFile) {
            isValid = value !== null ? true : false;
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
        if (inputIdentifier === 'image') {
            updatedFormElement.value = event.target.value;
            updatedFormElement.file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                console.log('img data', e.target.value);
            }

            console.log(updatedFormElement.value, ' ', updatedFormElement.file);
            updatedFormElement.touched = true;
            updatedFormElement.valid = this.checkValidity(updatedFormElement.file, updatedFormElement.validation);
            updatedOrderForm[inputIdentifier] = updatedFormElement;
        }
        else {
            updatedFormElement.value = event.target.value;
            updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
            updatedFormElement.touched = true;
            updatedOrderForm[inputIdentifier] = updatedFormElement;
        }

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
            <div>
                       <form className='former' onSubmit={this.orderHandler} encType='multipart/form-data'>
                                <div className="row">
                                    <div className="col-nmd-6">
                                        <Input
                                            key={formElementsArray[0].id}
                                            elementType={formElementsArray[0].config.elementType}
                                            elementConfig={formElementsArray[0].config.elementConfig}
                                            value={formElementsArray[0].config.value}
                                            label={formElementsArray[0].config.label}
                                            invalid={!formElementsArray[0].config.valid}
                                            shouldValidate={formElementsArray[0].config.validation}
                                            touched={formElementsArray[0].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[0].id)} />
                                    </div>

                                    <div className="col-md-6">
                                    <Input
                                            key={formElementsArray[1].id}
                                            elementType={formElementsArray[1].config.elementType}
                                            elementConfig={formElementsArray[1].config.elementConfig}
                                            value={formElementsArray[1].config.value}
                                            label={formElementsArray[1].config.label}
                                            invalid={!formElementsArray[1].config.valid}
                                            shouldValidate={formElementsArray[1].config.validation}
                                            touched={formElementsArray[1].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[1].id)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <Input
                                            key={formElementsArray[2].id}
                                            elementType={formElementsArray[2].config.elementType}
                                            elementConfig={formElementsArray[2].config.elementConfig}
                                            value={formElementsArray[2].config.value}
                                            label={formElementsArray[2].config.label}
                                            invalid={!formElementsArray[2].config.valid}
                                            shouldValidate={formElementsArray[2].config.validation}
                                            touched={formElementsArray[2].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[2].id)} />
                                        <span className="extern-type">We'll keep this private.</span>
                                        </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <Input
                                            key={formElementsArray[3].id}
                                            elementType={formElementsArray[3].config.elementType}
                                            elementConfig={formElementsArray[3].config.elementConfig}
                                            value={formElementsArray[3].config.value}
                                            label={formElementsArray[3].config.label}
                                            invalid={!formElementsArray[3].config.valid}
                                            shouldValidate={formElementsArray[3].config.validation}
                                            touched={formElementsArray[3].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[3].id)} />
                                        <span className="extern-type">Atleast 8 characters long.</span></div>


                                    <div className="col-md-6"> 
                                        <Input
                                            key={formElementsArray[4].id}
                                            elementType={formElementsArray[4].config.elementType}
                                            elementConfig={formElementsArray[4].config.elementConfig}
                                            value={formElementsArray[4].config.value}
                                            label={formElementsArray[4].config.label}
                                            invalid={!formElementsArray[4].config.valid}
                                            shouldValidate={formElementsArray[4].config.validation}
                                            touched={formElementsArray[4].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[4].id)} />
                                        <span className="extern-type">Atleast 8 characters long.</span></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-8">
                                    <Input
                                            key={formElementsArray[5].id}
                                            elementType={formElementsArray[5].config.elementType}
                                            elementConfig={formElementsArray[5].config.elementConfig}
                                            value={formElementsArray[5].config.value}
                                            label={formElementsArray[5].config.label}
                                            invalid={!formElementsArray[5].config.valid}
                                            shouldValidate={formElementsArray[5].config.validation}
                                            touched={formElementsArray[5].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[5].id)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12"> Upload verification document
                                    <Input
                                            key={formElementsArray[6].id}
                                            elementType={formElementsArray[6].config.elementType}
                                            elementConfig={formElementsArray[6].config.elementConfig}
                                            value={formElementsArray[6].config.value}
                                            label={formElementsArray[6].config.label}
                                            invalid={!formElementsArray[6].config.valid}
                                            shouldValidate={formElementsArray[6].config.validation}
                                            touched={formElementsArray[6].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[6].id)} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                    <Input
                                            key={formElementsArray[7].id}
                                            elementType={formElementsArray[7].config.elementType}
                                            elementConfig={formElementsArray[7].config.elementConfig}
                                            value={formElementsArray[7].config.value}
                                            label={formElementsArray[7].config.label}
                                            invalid={!formElementsArray[7].config.valid}
                                            shouldValidate={formElementsArray[7].config.validation}
                                            touched={formElementsArray[7].config.touched}
                                            changed={(event) => this.inputChangedHandler(event, formElementsArray[7].id)} />
                                    </div>
                                </div>
                               
                                <Button disabled={!this.state.formIsValid}>Register Yourself</Button>
                            </form>
            </div>
        );
        if (this.props.token !== null && this.props.token.length > 10) {
            console.log('getting here ', this.props.token);
            form = <Redirect to='/' />
        }
        let msger = (
            <div>{this.props.msg}</div>
        );

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
                            {msger}
                            {form}
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
        logger: (email, password) => { dispatch(actions.login(email, password)) },
        register: (email, password, fname, lname, file,account) => { dispatch(actions.register(fname, lname, email, file, "random", password,account)) }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(Register);