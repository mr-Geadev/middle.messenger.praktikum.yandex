import inputComponent from "../../components/input/input.component";

import registrationFormTmpl from './registration-form.layout.hbs';
import './registration-form.layout.scss';
import buttonComponent from "../../components/button/button.component";

const fields = [
  inputComponent('EMail'),
  inputComponent('Login'),
  inputComponent('First Name'),
  inputComponent('Last Name'),
  inputComponent('Phone Number'),
  inputComponent('Password', 'password'),
  inputComponent('Repeat Password', 'password'),
  buttonComponent('Create account'),
  buttonComponent('Enter', 'outline'),
]

export default () => registrationFormTmpl({
  inputs: fields
});
