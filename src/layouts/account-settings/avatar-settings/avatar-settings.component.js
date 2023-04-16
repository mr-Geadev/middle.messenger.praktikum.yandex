import avatarSettingsTmpl from './avatar-settings.component.hbs';
import './avatar-settings.component.scss';

import { buttonComponent } from "../../../components";

const buttonList = [
  buttonComponent('Save'),
]

export const avatarSettingsComponent = () => avatarSettingsTmpl({ buttonList });
