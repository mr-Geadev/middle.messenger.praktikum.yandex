import messageTmpl from './message.component.hbs';
import './message.component.scss';

export const messageComponent = (message) => messageTmpl({
  ...message,
  ownerClass: message.isOwner ? '_isOwner' : ''
})
