import chatHeaderTmpl from './chat-header.component.hbs';
import './chat-header.component.scss';

import { iconButtonComponent } from "//src/components";

export const chatHeaderComponent = () => chatHeaderTmpl({
  actionButton: iconButtonComponent('moreHorizontal', 'medium')
});
