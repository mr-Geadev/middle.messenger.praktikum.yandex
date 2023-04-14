import authPage from "./pages/auth/auth.page";
import errorPage from "./pages/error/error.page";
import mainPage from "./pages/main/main.page";

// TODO: make this class

const routes = [
  {path: '/auth', component: authPage()},
  {path: '/registration', component: authPage(true)},
  {path: '/404', component: errorPage('not found')},
  {path: '/500', component: errorPage('server error')},
  {path: '/main', component: mainPage()},
];

document.addEventListener('click', (event) => {
  if (event.target.href) {
    event.preventDefault();
    router(event.target.href)
  }
})

function router(newPath) {
  history.pushState({}, 'newUrl', newPath);
  let route = routes.find(route => route.path === window.location.pathname);
  root.innerHTML = route.component;
}

window.addEventListener('popstate', function () {
  let route = routes.find(route => route.path === window.location.pathname);
  root.innerHTML = route.component;
});

window.addEventListener('DOMContentLoaded', function () {
  let route = routes.find(route => route.path === window.location.pathname);
  root.innerHTML = route.component;
});
