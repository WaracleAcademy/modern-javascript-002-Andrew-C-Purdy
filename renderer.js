export function render(htmlContent) {
  const mainView = document.querySelector('#primaryView');
  mainView.innerHTML = htmlContent;
}

render('<h1>Title</h1>');

render('<h2>Some Text</h2>');

