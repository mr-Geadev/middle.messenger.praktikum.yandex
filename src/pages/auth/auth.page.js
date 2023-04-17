import authPage from './auth.page.hbs';
import './auth.page.scss';

import { authForm, registrationForm } from "/src/layouts";

export default (registration) => authPage({
  class: registration ? '_revert' : '',
  title: registration ? 'Sign Up' : 'Sign In',
  content: registration ? registrationForm : authForm
});
