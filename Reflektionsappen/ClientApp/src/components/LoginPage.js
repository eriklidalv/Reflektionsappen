import React, { Component } from 'react'
import logoImg from '../assets/images/logo/MT_logo.svg';
import checkboxIcon from '../assets/images/icons/checkbox_circle_icon.svg';
import exitIcon from '../assets/images/icons/exit_circle_icon.svg';

//PUT ALL APP TEXT IN ONE FILE

export class LoginPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            fieldBlurred: {
                email: true,
                password: true,
              }
        }
        // make this bind to the event in handleUserInput() method, not to the state itself
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    onSubmit(e){
        e.preventDefault();
        console.log('Form submitted', this.state);
    }

    /*isValid(){
        const {errors,isValid} = this.validateInput(this.state);
        if(!isValid){
            this.setState({errors: errors});
        }
        return isValid;
    }

    validateInput(input){

    }*/

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' Mailadressen du har angivit är inte korrekt försök igen.';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' Lösenord du har angivit är inte korrekt försök igen.';
            break;
          default:
            break;
        }
        this.setState({ formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

      handleBlur = (field) => () => {
        this.setState({
            fieldBlurred: { ...this.state.fieldBlurred, [field]: true },
        });
      }

      handleFocus = (field) => () => {
        this.setState({
            fieldBlurred: { ...this.state.fieldBlurred, [field]: false },
        });
      }
      


  render() {
    return (
        <div className="content-layout">
            <div className= {(this.state.fieldBlurred.email && this.state.fieldBlurred.password) ? "logo__container" : "logo__container__keyboard-open"}>
                <img className="logo__image" alt="logo" src={logoImg} />
            </div>
            <form onSubmit={(event) => this.onSubmit(event)}>
                <div>
                    {(this.state.emailValid && this.state.fieldBlurred.email) && <img className="input-checkbox" alt="input-checkbox" src={checkboxIcon}/>}
                    {(this.state.formErrors.email && this.state.fieldBlurred.email) && <img className="input-checkbox" alt="input-checkbox" src={exitIcon}/>}
                    <input  
                        className= {(this.state.formErrors.email && this.state.fieldBlurred.email) ? "login-input-error" : "login-input"}
                        name="email"
                        type="email"
                        placeholder="Mailadress"
                        value={this.state.email}       
                        onBlur= {this.handleBlur('email')}
                        onFocus= {this.handleFocus('email')}
                        onChange={(event) => this.handleUserInput(event)}
                        autoComplete="new-password">
                    </input>
                    {(this.state.formErrors.email && this.state.fieldBlurred.email) && <span>{this.state.formErrors.email}</span>}
                </div>
                <div>
                    {(this.state.passwordValid && this.state.fieldBlurred.password) && <img className="input-checkbox" alt="input-checkbox" src={checkboxIcon}/>}
                    {(this.state.formErrors.password && this.state.fieldBlurred.password) && <img className="input-checkbox" alt="input-checkbox" src={exitIcon}/>}
                    <input 
                        className= {(this.state.formErrors.password && this.state.fieldBlurred.password) ? "login-input-error" : "login-input"}
                        name="password"
                        type="password"
                        placeholder="Lösenord"
                        value={this.state.password}
                        onBlur= {this.handleBlur('password')}
                        onFocus= {this.handleFocus('password')}
                        onChange={(event) => this.handleUserInput(event)}
                        autoComplete="new-password">
                    </input>
                    {(this.state.formErrors.password && this.state.fieldBlurred.password) && <span>{this.state.formErrors.password}</span>}
                </div>
                <button className="button-hollow" type="submit">Logga in</button>
                <p className="horizontal-line"><span className="horizontal-line-text">Eller</span></p>
                <button className="button-full" type="submit">Skapa konto</button>
                <div className="forgot-password-container"><a className="link-forgot-password" href="/reflections">Glömt ditt lösenord?</a></div>
            </form>
        </div>
    )
  }
}

export default LoginPage
