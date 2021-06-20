import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Instinct is a a headless CMS that provides everything you need to build a retro
      </>
    ),
  },
  {
    title: 'Developer First',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Every aspect of Instinct is written as an individual package allowing developers more freedom
      </>
    ),
  },
  {
    title: 'No Boilerplate',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Everything from authentication to frontend hooks is already written for you
      </>
    ),
  },
  {
    title: 'Endless Customization',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Instinct provides dozens of libraries for your retro out of the box
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We believe in giving back to the community through high quality open source code
      </>
    ),
  },
  {
    title: 'Plugins',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Instinct supports a plugin system with the usage of NestJS to promote code reusability.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
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
