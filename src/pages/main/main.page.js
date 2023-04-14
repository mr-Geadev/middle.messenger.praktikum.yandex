import mainPage from './main.page.hbs';
import './main.page.scss';

import navBarLayout from '/src/layouts/nav-bar/nav-bar.layout';

export default () => mainPage({
  navbar: navBarLayout()
});
