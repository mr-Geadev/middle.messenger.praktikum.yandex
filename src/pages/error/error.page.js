import errorPage from './error.page.hbs';
import './error.page.scss';

import { buttonComponent } from "/src/components";

const ERRORS = [
  {
    type: 'not found',
    title: '404',
    text: `Perhaps you were looking for a red messenger?<br>He's not here`,
    button: buttonComponent('Back to green chats'),
    classes: ''
  }, {
    type: 'server error',
    title: '500',
    text: `We're out of green <br> Please try again later`,
    button: buttonComponent('Do nothing', 'blue'),
    classes: '_blue'
  }
];

function getError(errorType = 'not found') {
  return ERRORS.find(error => error.type === errorType);
}

export default (errorType = 'not found') => errorPage({
  error: getError(errorType)
});
