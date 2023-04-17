import iconButtonTmpl from './icon-button.component.hbs';
import './icon-button.component.scss';

import { iconComponent } from "/src/components";

export default (iconName, size = 'big', isActive = false, type = 'button') => iconButtonTmpl({
  icon: iconComponent(iconName),
  status: isActive ? '_active' : '',
  size: `_${size}`,
  type,
});
