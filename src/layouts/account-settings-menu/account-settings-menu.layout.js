import accountSettingsMenuTmpl from './account-settings-menu.layout.hbs';
import './account-settings-menu.layout.scss';
import { buttonComponent } from "../../components";

const menuItems = [
  buttonComponent('General', 'outline'),
  buttonComponent('Avatar', 'outline'),
  buttonComponent('Security', 'outline'),
]

export default () => accountSettingsMenuTmpl({
  menuItems,
  logoutButton: buttonComponent('Log Out', 'outline'),
});
