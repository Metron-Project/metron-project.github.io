import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'MetronInfo Metadata',
    description: (
      <>
        A new comic schema for digital comic books that fixes some of the 
        deficiencies that exist with the <code>ComicInfo.xml</code> schema.
      </>
    ),
  },
  {
    title: "Python API wrappers for Comic API's",
    description: (
      <>
        Python API wrappers for <b>Comic Vine</b>, <b>Marvel</b>, and <b>Metron</b>.
      </>
    ),
  },
  {
    title: 'Tools to work with Digital Comics',
    description: (
      <>
        Python tools to add metadata tagging to Digital Comics.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
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
