import newMessageTmpl from './new-message.component.hbs';
import './new-message.component.scss';

import { iconButtonComponent } from "/src/components";

export const newMessageComponent = () => newMessageTmpl({
  addFileButton: iconButtonComponent('plusSquare'),
  sendMessageButton: iconButtonComponent('send', 'big', false, 'submit'),
});
