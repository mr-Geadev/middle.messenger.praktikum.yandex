import inputTmpl from './input.component.hbs';
import './input.component.scss';

export default (placeholder,  name, type = 'text') => inputTmpl({placeholder, type, name});
