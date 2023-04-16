import iconButtonTmpl from './icon-button.component.hbs';
import './icon-button.component.scss';

import { iconComponent } from "../index";

export default (iconName, size = 'big', isActive = false) => iconButtonTmpl({
  icon: iconComponent(iconName),
  status: isActive ? '_active' : '',
  size: `_${size}`
});
