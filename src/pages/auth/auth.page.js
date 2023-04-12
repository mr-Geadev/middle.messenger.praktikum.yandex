import authPage from '/src/pages/auth/auth.page.hbs';
import button from '/src/components/button/button.component';
import '/src/pages/auth/auth.page.scss';

export default (username) => authPage({
    username,
    button: button({
        name: 'Super button 1'
    })
});
