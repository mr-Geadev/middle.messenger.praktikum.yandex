import mainPage from './main.page.hbs';
import './main.page.scss';

import { navBar, chatList, chat, accountSettingsMenu, accountSettings } from '/src/layouts';

const sections = [
  { name: 'chats', aside: chatList(), content: chat() },
  { name: 'account-settings-general', aside: accountSettingsMenu(), content: accountSettings('general') },
  { name: 'account-settings-avatar', aside: accountSettingsMenu(), content: accountSettings('avatar') },
  { name: 'account-settings-password', aside: accountSettingsMenu(), content: accountSettings('password') },
]

export default (selectedSection = 'chats', settingSection = 'general') => mainPage({
  navbar: navBar(),
  ...sections.find(section => section.name === selectedSection)
});
