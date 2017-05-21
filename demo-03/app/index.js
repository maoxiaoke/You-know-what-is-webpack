import './css/style.css';

function component () {
  var element = document.createElement('div');
  element.innerHTML = "Hello World！";

  return element;
}
document.body.appendChild(component());