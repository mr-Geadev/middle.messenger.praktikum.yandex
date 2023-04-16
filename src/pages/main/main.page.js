import mainPage from './main.page.hbs';
import './main.page.scss';

import { navBar, chatList, chat } from '/src/layouts';

export default () => mainPage({
  navbar: navBar(),
  chatList: chatList(),
  chat: chat()
});
