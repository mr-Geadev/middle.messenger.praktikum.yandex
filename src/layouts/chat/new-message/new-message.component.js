import newMessageTmpl from './new-message.component.hbs';
import './new-message.component.scss';
import {iconButton} from "../../../components";



export const newMessageComponent = () => newMessageTmpl({
  addFileButton: iconButton('plusSquare'),
  sendMessageButton: iconButton('send'),
});
