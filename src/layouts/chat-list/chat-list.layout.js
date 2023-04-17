import chatListTmpl from './chat-list.layout.hbs';
import './chat-list.layout.scss';

import chatPreviewComponent from "./chat-preview/chat-preview.component";

const chatTemplate = {
  name: 'Ivan Abramov',
  message: 'It\'s wednesday my dudes',
  time: '16:20',
}

const CHAT_LIST = new Array(20)
  .fill(chatTemplate)
  .map((chat) => chatPreviewComponent(chat));

export default () => chatListTmpl({chatList: CHAT_LIST});
