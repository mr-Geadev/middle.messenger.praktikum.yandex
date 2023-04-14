import inputComponent from "../../components/input/input.component";

import registrationFormTmpl from './registration-form.layout.hbs';
import './registration-form.layout.scss';
import buttonComponent from "../../components/button/button.component";

const fields = [
  inputComponent('First Name', 'first_name'),
  inputComponent('Last Name', 'second_name'),
  inputComponent('Login', 'login'),
  inputComponent('E-mail', 'email'),
  inputComponent('Phone Number', 'phone'),
  inputComponent('Password', 'password', 'password'),
  inputComponent('Repeat Password', 'password_repeat', 'password'),
  buttonComponent('Create account'),
  buttonComponent('Enter', 'outline'),
]

export default () => registrationFormTmpl({
  inputs: fields
});
