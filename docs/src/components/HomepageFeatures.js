import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    icon: 'fa-check-circle',
    description: (
      <>
        Instinct is a a headless CMS that provides everything you need to build a retro
      </>
    ),
  },
  {
    title: 'Developer First',
    icon: 'fa-file-code',
    description: (
      <>
        Every aspect of Instinct is written as an individual package allowing developers more freedom
      </>
    ),
  },
  {
    title: 'No Boilerplate',
    icon: 'fa-times-circle',
    description: (
      <>
        Everything from authentication to frontend hooks is already written for you
      </>
    ),
  },
  {
    title: 'Endless Customization',
    icon: 'fa-paint-brush',
    description: (
      <>
        Instinct provides dozens of libraries for your retro out of the box
      </>
    ),
  },
  {
    title: 'Open Source',
    icon: 'fa-heart',
    description: (
      <>
        We believe in giving back to the community through high quality open source code
      </>
    ),
  },
  {
    title: 'Plugin Support',
    icon: 'fa-puzzle-piece',
    description: (
      <>
        Instinct supports a plugin system with the usage of NestJS to promote code reusability
      </>
    ),
  },
  {
    title: 'Modular Architecture',
    icon: 'fa-network-wired',
    description: (
      <>
        By utilizing modular architecture, we can prevent code duplication and bugs along the way
      </>
    ),
  },
  {
    title: 'Blazing Fast',
    icon: 'fa-rocket',
    description: (
      <>
        With an average response rate of 25ms, Instinct's API proves retros don't have to be slow
      </>
    ),
  },
  {
    title: 'Single Page App',
    icon: 'fa-desktop',
    description: (
      <>
        SPAs allow visitors to engage with your website without waiting on the backend to render
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <i className={`fas ${icon} fa-4x`} style={{marginBottom: '1rem'}} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
