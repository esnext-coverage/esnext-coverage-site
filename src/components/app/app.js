import h from 'virtual-dom/h';
import './app.css';
import header from '../header/header.js';
import mission from '../mission/mission.js';
import about from '../about/about.js';
import features from '../features/features.js';
import pricing from '../pricing/pricing.js';
import footer from '../footer/footer.js';

const routing = {
  '#': mission,
  '#about': about,
  '#features': features,
  '#pricing': pricing
};

export default function appComponent(state) {
  return h('.container', [
    header(state),
    routing[state.path](),
    footer()
  ]);
}
