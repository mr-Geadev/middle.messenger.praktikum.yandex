import authPage from './src/pages/auth/auth.page';

const app = document.getElementById('root');

const test = authPage({
    userName: 'mr_geadev',
});

console.log(app, test);

app.innerHTML = test
