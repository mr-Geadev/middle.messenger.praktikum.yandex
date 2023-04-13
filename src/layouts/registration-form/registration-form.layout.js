import inputComponent from "../../components/input/input.component";

import registrationFormTmpl from './registration-form.layout.hbs';
import './registration-form.layout.scss';
import buttonComponent from "../../components/button/button.component";

const fields = [
  inputComponent('login'),
  inputComponent('password', 'password'),
  buttonComponent('Enter'),
  buttonComponent('Create account', 'outline'),
]

export default () => registrationFormTmpl({
  inputs: fields
});
