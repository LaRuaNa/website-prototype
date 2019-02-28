import React from 'react';
import Hero from '../components/hero';
import Layout from '../components/layout';
import { LearnPageData } from '../types';

type Props = {
  data: LearnPageData;
};

export default (props: Props) => {
  const title = 'PAGE NOT FOUND';
  const description = 'You have hit a route that does not exist.';

  return (
    <Layout title={title} description={description}>
      <Hero title={title} />
      <article className="article-reader">
        <h1 className="article-reader__headline">{title}</h1>
        <div>
          <p>
            The page you're trying to access does not exist. Go back to the
            Homepage or find what you're looking for in the menu.
          </p>
          <p>
            Take me back to the <a href="/">Homepage</a> →
          </p>
        </div>
      </article>
    </Layout>
  );
};
