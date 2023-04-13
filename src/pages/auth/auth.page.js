import authPage from './auth.page.hbs';
import './auth.page.scss';

import {authForm} from "../../layouts";

export default () => authPage({
  authForm
});
