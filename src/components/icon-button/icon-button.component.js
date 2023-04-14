import iconButtonTmpl from './icon-button.component.hbs';
import './icon-button.component.scss';

import { icon } from "../index";


export default (iconName, active = false) => iconButtonTmpl({
  icon: icon(iconName),
  class: active ? '_active' : ''
});
