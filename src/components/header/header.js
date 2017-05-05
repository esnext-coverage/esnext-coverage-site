import h from 'virtual-dom/h';
import './header.css';
import logoSrc from './esnext-coverage-logo.png';

const homeLink = h('a', {href: '#'}, [
  h('img', {src: logoSrc, className: 'logo-image', attributes: {width: '80px', height: '80px', alt: ''}})
]);

const links = [
  ['About', {href: '#about', className: 'nav-item'}],
  ['Features', {href: '#features', className: 'nav-item'}],
  ['Pricing', {href: '#pricing', className: 'nav-item'}],
  ['Demo', {href: '/demo.html', target: '_blank', className: 'nav-item--important'}]
];
function navItems(path) {
  return links.map(([text, attrs]) => {
    if (path === attrs.href) {
      attrs = Object.assign({}, attrs, {className: `${attrs.className}--active`});
    }
    return h('a', attrs, text);
  });
}

export default function headerComponent(state) {
  return h('.header', [
    homeLink,
    h('.nav', navItems(state.path))
  ]);
}
