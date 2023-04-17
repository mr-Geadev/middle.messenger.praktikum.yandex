import generalTmpl from './password-settings.component.hbs';
import './password-settings.component.scss';

import { buttonComponent, inputComponent } from "/src/components";

const inputList = [
  inputComponent('Old password', 'oldPassword', 'password'),
  inputComponent('New password', 'newPassword', 'password'),
  inputComponent('Repeat new password', 'repeatPassword', 'password'),
]

const buttonList = [
  buttonComponent('Save'),
  buttonComponent('Cancel', 'outline'),
]

export const passwordSettingsComponent = () => generalTmpl({
  inputList,
  buttonList
});
