import navBarTmpl from './nav-bar.layout.hbs';
import './nav-bar.layout.scss';

import { iconButtonComponent } from "/src/components";

const BUTTONS = [
  iconButtonComponent('search'),
  iconButtonComponent('message', 'big', true),
  iconButtonComponent('user'),
]

export default () => navBarTmpl({buttons: BUTTONS});
