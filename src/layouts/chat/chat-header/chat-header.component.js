import chatHeaderTmpl from './chat-header.component.hbs';
import './chat-header.component.scss';
import {iconButton} from "../../../components";

export const chatHeaderComponent = () => chatHeaderTmpl({
  actionButton: iconButton('moreHorizontal', 'medium')
});
