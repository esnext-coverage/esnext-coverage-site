import h from 'virtual-dom/h';
import './features.css';

const projectTitle = h('.page-title', [
  'We\'ve got you covered'
]);

const projectDescription = h('.page-description', [
  'Although esnext-coverage is still young, we already have a few' +
  ' interesting features that we would like to show.'
]);

const featureGrid = h('.grid--noimg', [
  h('.grid-cell', [
    h('.grid-cell-title', 'ES6/7/x support'),
    h('.grid-cell-description', [
      'As its name suggests, esnext-coverage has been designed to support ',
      h('span.highlight', 'all modern JavaScript versions.')
    ])
  ]),
  h('.grid-cell', [
    h('.grid-cell-title', 'Formatters'),
    h('.grid-cell-description', [
      'Write a custom formatter or use one of the already available, including ',
      h('span.highlight', 'format-html'),
      ', ',
      h('span.highlight', 'format-text'),
      ', and ',
      h('span.highlight', 'format-clover'),
      '.'
    ])
  ]),
  h('.grid-cell', [
    h('.grid-cell-title', 'Any test framework'),
    h('.grid-cell-description', [
      'esnext-coverage has been tested with ',
      h('span.highlight', 'Mocha'),
      ', ',
      h('span.highlight', 'Tape'),
      ', and ',
      h('span.highlight', 'Jasmine'),
      ', and should work with any framework supporting the --require API.'
    ])
  ]),
  h('.grid-cell', [
    h('.grid-cell-title', 'Tagged coverage'),
    h('.grid-cell-description', [
      'Define a ',
      h('span.highlight', 'custom tag'),
      ' for any AST node, and it will be included as a separate' +
      ' metric in the generated reports.'
    ])
  ]),
  h('.grid-cell', [
    h('.grid-cell-title', 'Babel pipeline'),
    h('.grid-cell-description', [
      h('span.highlight', 'Automatic and seamless integration'),
      ' in the Babel pipeline of your project.' +
      ' No configuration required.'
    ])
  ]),
  h('.grid-cell', [
    h('.grid-cell-title', 'CLI'),
    h('.grid-cell-description', [
      'Minimalistic, but ',
      h('span.highlight', 'powerful CLI'),
      ' allows you to instrument your code and collect coverage data' +
      ' independently of unit test frameworks.'
    ])
  ])
]);

const features = h('.section', [
  projectTitle,
  projectDescription,
  featureGrid
]);

export default function featuresComponent() {
  return features;
}
