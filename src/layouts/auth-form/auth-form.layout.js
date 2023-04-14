import inputComponent from "../../components/input/input.component";

import authFormTmpl from './auth-form.layout.hbs';
import './auth-form.layout.scss';
import buttonComponent from "../../components/button/button.component";

const fields = [
   inputComponent('Login', 'login'),
   inputComponent('Password', 'password', 'password'),
   buttonComponent('Enter'),
   buttonComponent('Create account', 'outline'),
]

export default () => authFormTmpl({
  inputs: fields
});
