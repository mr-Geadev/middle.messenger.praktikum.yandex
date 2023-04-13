import authPage from './src/pages/auth/auth.page';
import './main.scss';

const app = document.getElementById('root');

const test = authPage({
    userName: 'mr_geadev',
});

app.innerHTML = test
