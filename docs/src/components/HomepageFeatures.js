import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Instinct is a a headless CMS that provdides everything you need to build a retro
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
  {
    title: 'Typescript',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        By using Typescript, Instinct provides a type safe and easy to use API on the front and back end.
      </>
    ),
  },
  {
    title: 'NestJS',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        On the backend. Instinct is setup as dozens of NestJS modules allowing hotel owners to easily add functionality.
      </>
    ),
  },
  {
    title: 'React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Instinct offers many frontend libraries for theming and functionality to make building your website a breeze.
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
