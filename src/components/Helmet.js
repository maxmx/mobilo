import React from 'react';
import Helmet from 'react-helmet';

import defaults from '../constants/seo-defaults';

const prefix = slug => `${process.env.GATSBY_SITE_URL}${slug}`;

export default props => {
  const helmet = { ...defaults, ...props };
  const { title, description, image, type, slug } = helmet;
  const defaultImg = image || defaults.image;
  const link = prefix(slug);
  const img = prefix(defaultImg);

  return (
    <Helmet
      title={title}
      link={[{ rel: 'canonical', href: link }]}
      meta={[
        { name: 'description', content: description },
        // Facebook
        { property: 'og:title', content: title },
        { property: 'og:type', content: type },
        { property: 'og:url', content: link },
        { property: 'og:image', content: img },
        { property: 'og:description', content: description },
        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: img }
      ]}
    />
  );
};
