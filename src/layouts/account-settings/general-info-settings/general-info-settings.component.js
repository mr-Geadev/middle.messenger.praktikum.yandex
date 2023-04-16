import generalTmpl from './general-info-settings.component.hbs';
import './general-info-settings.component.scss';

import { buttonComponent, inputComponent } from "../../../components";

const inputList = [
  inputComponent('First Name', 'first_name', 'text', true),
  inputComponent('Second Name', 'second_name', 'text', true),
  inputComponent('Display Name', 'display_name', 'text', true),
  inputComponent('Login', 'login', 'text', true),
  inputComponent('Email', 'email', 'text', true),
  inputComponent('Phone', 'phone', 'text', true),
]

const buttonList = [
  buttonComponent('Save'),
  buttonComponent('Cancel', 'outline'),
]

export const generalInfoSettingsComponent = () => generalTmpl({
  inputList,
  buttonList
});
