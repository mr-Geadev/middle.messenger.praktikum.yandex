import avatarSettingsTmpl from './avatar-settings.component.hbs';
import './avatar-settings.component.scss';

import { buttonComponent } from "/src/components";

const buttonList = [
  buttonComponent('Change Photo'),
]

export const avatarSettingsComponent = () => avatarSettingsTmpl({ buttonList });
