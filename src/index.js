import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';
import appComponent from './components/app/app.js';

let tree = appComponent({path: window.location.hash || '#'});
let rootNode = createElement(tree);

function applyChanges(href) {
  const newTree = appComponent({path: href});
  const patches = diff(tree, newTree);

  rootNode = patch(rootNode, patches);
  tree = newTree;
}

window.addEventListener('hashchange', function hashchangeHandler() {
  applyChanges(window.location.hash || '#');
});

document.body.appendChild(rootNode);
