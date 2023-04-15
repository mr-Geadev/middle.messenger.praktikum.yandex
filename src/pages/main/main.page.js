import mainPage from './main.page.hbs';
import './main.page.scss';

import { navBar, chatList } from '/src/layouts';

export default () => mainPage({
  navbar: navBar(),
  chatList: chatList(),
});
