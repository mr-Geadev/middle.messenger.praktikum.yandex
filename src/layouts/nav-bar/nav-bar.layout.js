import navBarTmpl from './nav-bar.layout.hbs';
import './nav-bar.layout.scss';

import { iconButton } from "../../components";

const BUTTONS = [
  iconButton('search'),
  iconButton('message', true),
  iconButton('user'),
]

export default () => navBarTmpl({buttons: BUTTONS});
