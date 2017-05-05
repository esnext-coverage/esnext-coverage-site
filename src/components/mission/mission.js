import h from 'virtual-dom/h';
import './mission.css';
import previewSrc from './esnext-coverage-html-reporter.png';

const projectTitle = h('.page-title', [
  'Code quality tools',
  h('span.br'),
  'for the modern web'
]);

const projectDescription = h('.page-description', [
  'The goal of esnext-coverage is to be a developer-friendly tool' +
  ' that produces innovative code coverage visualizations, enables over time project quality tracking,' +
  ' and simplifies test debugging.'
]);

const projectPreview = h('.browser', [
  h('div', {className: 'browser-header'}, [
    h('.browser-header__control--a'),
    h('.browser-header__control--b'),
    h('.browser-header__control--c')
  ]),
  h('.browser-body', {style: {backgroundImage: `url(${previewSrc})`}}, [])
]);

const mission = h('.section', [
  projectTitle,
  projectDescription,
  projectPreview
]);

export default function missionComponent() {
  return mission;
}
