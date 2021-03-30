import React, { Component } from "react";
import './login.css';
import {connect} from 'react-redux';
import { NavLink,Redirect } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import * as actions from '../../store/Action/index';

// import 

class Login extends Component {
  state = {
    orderForm: {
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
          minLength:8,
          maxLength:16
        },
        valid: false,
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
    
    console.log('working fine');
    if(this.state.formIsValid)
    {
      console.log('executed it');
      this.props.logger(this.state.orderForm.email.value,this.state.orderForm.password.value);
    }
    else
    {
      console.log('form is invalid');
    }
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
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
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
        ))}
        <Button disabled={!this.state.formIsValid}>Login to account</Button>
      </form>
    );
    let msg=(<div>

    </div>);
    if(this.props.msg)
    {
      msg=(<div>
        <h3>{this.props.msg}</h3>
      </div>)
    }
    if(this.props.token!==null)
    {
      console.log('getting here ',this.props.token);
      form=<Redirect to='/'/>
    }
    return (
      <div className='login'>
        <div className="login-box">
          <img src="http://localhost:3000/3dlogo.png" alt="our " className='img' />
          <div className="login-box-formbox">
            <div className="login-box-signup">
              Don't have an account? <NavLink to="/register">Sign Up</NavLink>
            </div>
            <div className="login-box-login">
              <h1>Welcome to Headth</h1>
              {msg}
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

const mapStatetoProps=state=>{
  return{
    msg:state.reducer1.msg,
    token:state.reducer1.token
  }
}

const mapDispatchtoProps=dispatch=>{
  return{
    logger:(email,password)=>{dispatch(actions.login(email,password))}
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Login);