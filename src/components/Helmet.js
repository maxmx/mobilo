import React from 'react';
import Helmet from 'react-helmet';

import defaults from '../constants/seo-defaults';

const prefix = url => `${process.env.GATSBY_SITE_URL}${url}`;

export default props => {
  const helmet = { ...defaults, ...props };
  const { title, description, image, type, url } = helmet;
  const link = prefix(url);
  const img = prefix(image);

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
