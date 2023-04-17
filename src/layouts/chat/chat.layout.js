import chatTmpl from './chat.layout.hbs';
import './chat.layout.scss';

import { chatHeaderComponent } from "./chat-header/chat-header.component";
import { chatHistoryComponent } from './chat-history/chat-history.component';
import { newMessageComponent } from "./new-message/new-message.component";

export default () => chatTmpl({
  chatHeader: chatHeaderComponent(),
  chatHistory: chatHistoryComponent(),
  newMessage: newMessageComponent(),
});
