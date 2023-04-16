import accountSettingsTmpl from './account-settings.layout.hbs';
import './account-settings.layout.scss';

import { generalInfoSettingsComponent } from "./general-info-settings/general-info-settings.component";
import { avatarSettingsComponent } from "./avatar-settings/avatar-settings.component";
import { passwordSettingsComponent } from "./password-settings/password-settings.component";

const sections = [
  { name: 'general', title: 'General', component: generalInfoSettingsComponent()},
  { name: 'avatar', title: 'Avatar', component: avatarSettingsComponent()},
  { name: 'password', title: 'Password', component: passwordSettingsComponent()},
]

export default (selectedSection = 'general') => {
  return accountSettingsTmpl({
    ...sections.find(section => section.name === selectedSection),
  })
};
