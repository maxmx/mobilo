import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import groupBy from 'lodash.groupby';

export const toShow = ({
  node: {
    frontmatter: { title, dates, artistes, poster },
    fields: { slug }
  }
}) => ({ title, dates, artistes, poster, slug });

export const toFlatShows = shows => {
  const flatShows = [];
  shows.forEach(({ title, dates, artistes, poster, slug }) => {
    dates.forEach(({ date, billet }) => {
      flatShows.push({
        title,
        artistes,
        poster,
        date,
        billet,
        slug,
        day: format(date, 'dddd D MMMM YYYY', { locale }),
        time: format(date, 'HH:mm')
      });
    });
  });
  return flatShows;
};

const dateComparator = (a, b) => new Date(a.date) - new Date(b.date) || a.title.localeCompare(b.title);

export const sortByDate = shows => shows.sort(dateComparator);

export const groupShowsByDates = shows => groupBy(shows, ({ day }) => day);

export const toImages = (root = '/img') => imageSharps =>
  imageSharps.edges.reduce((memo, { node: { fluid } }) => ({ ...memo, [`${root}/${fluid.originalName}`]: fluid }), {});

export const toArtists = ({
  node: {
    frontmatter: { title, image },
    fields: { slug }
  }
}) => ({ title, image, slug });
