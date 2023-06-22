const AMOUNT_TO_SHOW_LIKLY = 4;
const INITIAL_AMOUNT_TO_SHOW_MAIN = 8;
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const PLAYBACK_STEP = 1;
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 400;
const PASSWORD_PATTERN = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d).{2,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ApiRoutes = {
  Films: '/films',
  Film: '/films/',
  PromoFilm: '/promo',
  LikedFilms: '/favorite',
  FilmReviews: '/comments/',
  Login: '/login',
  Logout: '/logout'
};

export {
  AMOUNT_TO_SHOW_LIKLY,
  INITIAL_AMOUNT_TO_SHOW_MAIN,
  SECONDS_IN_MINUTE,
  SECONDS_IN_HOUR,
  PLAYBACK_STEP,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  PASSWORD_PATTERN,
  EMAIL_PATTERN,
  ApiRoutes
};
