import authFormTmpl from './auth-form.layout.hbs';
import './auth-form.layout.scss';

import { inputComponent } from "../../components";
import { buttonComponent } from "../../components";

const fields = [
   inputComponent('Login', 'login'),
   inputComponent('Password', 'password', 'password'),
   buttonComponent('Enter'),
   buttonComponent('Create account', 'outline'),
]

export default () => authFormTmpl({
  inputs: fields
});
