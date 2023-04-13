import inputTmpl from './input.component.hbs';
import './input.component.scss';

export default (placeholder, type = 'text') => inputTmpl({placeholder, type});
