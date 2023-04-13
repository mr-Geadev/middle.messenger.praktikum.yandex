import authPage from './auth.page.hbs';
import './auth.page.scss';

import { authForm } from "../../layouts";
import { registrationForm } from "../../layouts";

export default (registration) => authPage({
  registration,
  authForm,
  registrationForm
});
