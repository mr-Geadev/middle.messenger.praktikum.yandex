import buttonTmpl from './button.component.hbs';
import './button.component.scss';

export default (text, style = 'primary', type = 'button') => buttonTmpl({text, style, type});
