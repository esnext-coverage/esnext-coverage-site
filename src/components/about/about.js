import h from 'virtual-dom/h';
import './about.css';
import instrumentationSrc from './instrumentation.png';
import coverageSrc from './coverage.png';
import dotsSrc from './dots.png';
import thermometersSrc from './thermometers.png';
import stackSrc from './stack.png';
import babelSrc from './babel.png';

const projectTitle = h('.page-title', [
  'About esnext-coverage'
]);

const projectDescription = h('.page-description', [
  'esnext-coverage is a collection of tools that perform ',
  h('span.highlight', 'static and dynamic analysis'),
  ' of JavaScript code and generate ',
  h('span.highlight', 'human-readable reports'),
  '. It was created because we were not satisfied with the available' +
  ' code quality metrics solutions. '
]);

const whatIsDifferent = h('.section', [
  h('.section-title', [
    'Innovation at the core'
  ]),
  h('.section-description', [
    'We want esnext-coverage to be a significant improvement' +
    ' over existing code quality metrics software.'
  ]),
  h('.grid', [
    h('.grid-cell', [
      h('.grid-cell-title', 'Modern UI'),
      h('.grid-cell-description', [
        'The HTML reporter generates a ',
        h('span.highlight', 'dynamic web application'),
        ' capable of ',
        h('span.highlight', 'fuzzy search'),
        ' and ',
        h('span.highlight', 'drill-down'),
        '.'
      ]),
      h('img.feature-image', {src: thermometersSrc})
    ]),
    h('.grid-cell', [
      h('.grid-cell-title', 'Better coverage'),
      h('.grid-cell-description', [
        'esnext-coverage dives deep in the AST to generate a ',
        h('span.highlight', 'comprehensive code instrumentation'),
        '.'
      ]),
      h('img.feature-image', {src: coverageSrc})
    ]),
    h('.grid-cell', [
      h('.grid-cell-title', 'Data visualization'),
      h('.grid-cell-description', [
        'Discover ',
        h('span.highlight', 'hotspots'),
        ' in your project, see your ',
        h('span.highlight', 'project'),
        ', ',
        h('span.highlight', 'dependencies,'),
        ' and ',
        h('span.highlight', 'control flow graphs.')
      ]),
      h('img.feature-image', {src: dotsSrc})
    ]),
    h('.grid-cell', [
      h('.grid-cell-title', 'Babel pipeline'),
      h('.grid-cell-description', [
        h('span.highlight', 'Automatic and seamless integration'),
        ' in the Babel pipeline of your project.'
      ]),
      h('img.feature-image', {src: babelSrc})
    ]),
    h('.grid-cell', [
      h('.grid-cell-title', 'Execution stack'),
      h('.grid-cell-description', [
        'A step by step code execution stack provides insights into' +
        ' the way your code is run under test.'
      ]),
      h('img.feature-image', {src: stackSrc})
    ]),
    h('.grid-cell', [
      h('.grid-cell-title', 'More than coverage'),
      h('.grid-cell-description', [
        'The goal of esnext-coverage is to be a collection of ',
        h('span.highlight', 'code analysis tools'),
        ' that provides ',
        h('span.highlight', 'insights'),
        ' into projects to developers and team managers.'
      ])
    ])
  ])
]);

const howDoesItWorkSection = h('.section', [
  h('.section-title', [
    'How does it work'
  ]),
  h('.section-description', [
    'Your code is instrumented by visiting trackable nodes, such as expressions' +
    ' and statements. These nodes are wrapped in runtime tracker' +
    ' functions (see below). During runtime the trackers are executed and ' +
    ' collect coverage information. This information is then passed to formatters' +
    ' that generate a human-readable representation.'
  ]),
  h('img.instrumentation-img', {src: instrumentationSrc}),
  h('.section-description', [
    'esnext-coverage automatically integrates itself in your Babel pipeline.' +
    ' Unlike other tools there is no unnecessary preprocessing or AST generation. ' +
    ' The installation and configuration are intuitive because they imitate' +
    ' the Babel plugin ecosystem.'
  ])
]);

const about = h('.section', [
  projectTitle,
  projectDescription,
  whatIsDifferent,
  howDoesItWorkSection
]);

export default function aboutComponent() {
  return about;
}
