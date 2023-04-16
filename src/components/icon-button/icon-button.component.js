import iconButtonTmpl from './icon-button.component.hbs';
import './icon-button.component.scss';

import { icon } from "../index";


export default (iconName, size = 'big', isActive = false) => iconButtonTmpl({
  icon: icon(iconName),
  status: isActive ? '_active' : '',
  size: `_${size}`
});
