import chatPreviewTmpl from './chat-preview.component.hbs';
import './chat-preview.component.scss';

export default (chat) => chatPreviewTmpl({...chat});
