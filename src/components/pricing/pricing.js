import h from 'virtual-dom/h';
import './pricing.css';

const projectTitle = h('.page-title', [
  'Free for open source'
]);

// 'Free software brings great value to the humanity.' +
// ' Many people depend on it.

const projectDescription = h('.page-description', [
  'To encourage people to produce high quality software' +
  ' esnext-coverage will always be free for open source.' +
  ' It\'s also an inexpensive solution for private projects.' +
  ' See pricing plans below.'
]);

const pricingPlans = h('.pricing-plans', [
  h('.pricing-plan--open-source', [
    h('.pricing-plan-title', ['Free']),
    h('.pricing-plan-price', ['0']),
    h('.pricing-plan-description', ['It\'s free, no charge :)']),
    h('.pricing-plan-perks', [
      h('.pricing-plan-perk', ['Unlimited public repositories']),
      h('.pricing-plan-perk', ['1 private repository']),
      h('.pricing-plan-perk', ['1 GB disk space'])
    ]),
    h('a.pricing-plan-cta', ['Available soon'])
  ]),
  h('.pricing-plan--standard', [
    h('.pricing-plan-title', ['Standard']),
    h('.pricing-plan-price', ['3']),
    h('.pricing-plan-description', ['Charged on a monthly basis']),
    h('.pricing-plan-perks', [
      h('.pricing-plan-perk', ['Unlimited public repositories']),
      h('.pricing-plan-perk', ['Unlimited private repositories']),
      h('.pricing-plan-perk', ['10 GB disk space'])
    ]),
    h('a.pricing-plan-cta', ['Available soon'])
  ]),
  h('.pricing-plan--pro', [
    h('.pricing-plan-title', ['Pro']),
    h('.pricing-plan-price', ['10']),
    h('.pricing-plan-description', ['Charged on a monthly basis']),
    h('.pricing-plan-perks', [
      h('.pricing-plan-perk', ['Unlimited public repositories']),
      h('.pricing-plan-perk', ['Unlimited private repositories']),
      h('.pricing-plan-perk', ['1 TB disk space'])
    ]),
    h('a.pricing-plan-cta', ['Available soon'])
  ])
]);

const pricing = h('.section', [
  projectTitle,
  projectDescription,
  pricingPlans
]);

export default function pricingComponent() {
  return pricing;
}
