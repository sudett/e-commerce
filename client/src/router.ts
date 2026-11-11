const app = document.querySelector("#app");

function renderRoute() {
  if (!app) {
    return;
  }

  const { pathname } = window.location;

  switch (pathname) {
    case "/":
      app.innerHTML = "Home Page";
      break;

    case "/men":
      app.innerHTML = "Men's Products";
      break;

    case "/women":
      app.innerHTML = "Women's Product";
      break;

    case "/products":
      app.innerHTML = "All Product";
      break;

    default:
      app.innerHTML = "Page Not Found";
  }
}

function navigate(path: string) {
  history.pushState({}, "", path);
  renderRoute();
}

document.querySelectorAll<HTMLAnchorElement>("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigate(link.pathname);
  });
});

export { renderRoute };
