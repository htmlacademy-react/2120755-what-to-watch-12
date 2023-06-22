import { RatingNameType } from '../types';

const rating = {
  1:'Rating 1',
  2:'Rating 2',
  3:'Rating 3',
  4:'Rating 4',
  5:'Rating 5',
  6:'Rating 6',
  7:'Rating 7',
  8:'Rating 8',
  9:'Rating 9',
  10:'Rating 10',
};

const ratingName: RatingNameType = {
  0: 'Bad',
  1: 'Bad',
  2: 'Bad',
  3: 'Normal',
  4: 'Normal',
  5: 'Good',
  6: 'Good',
  7: 'Good',
  8: 'Very good',
  9: 'Very good',
  10: 'Awesome',
};

const filmNavigationOptions = ['Overview' , 'Details' , 'Reviews'];

const locationToClassMap = {
  '/mylist': 'user-page__head',
  '/login': 'user-page__head',
  '/films/:id': 'film-card__head',
  '/': 'film-card__head'
};

export {
  rating,
  ratingName,
  filmNavigationOptions,
  locationToClassMap
};
