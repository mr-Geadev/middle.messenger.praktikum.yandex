import mainPage from './main.page.hbs';
import './main.page.scss';

import { navBar, chatList, chat, accountSettingsMenu } from '/src/layouts';

const sections = [
  { name: 'chats', aside: chatList(), content: chat() },
  { name: 'account-settings', aside: accountSettingsMenu(), content: chat() },
]

export default (selectedSection = 'chats') => mainPage({
  navbar: navBar(),
  ...sections.find(section => section.name === selectedSection)
});
