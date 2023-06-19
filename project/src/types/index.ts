export type FilmType = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type ReviewObjectType = {
    id: number;
    user: {
      id: number;
      name: string;
    };
    rating: number;
    comment: string;
    date: string;
}

export type ReviewType = {
  comment: string;
  rating: string;
  id: number;
}

export type RatingNameType = {
  [key: number]: string;
};

export type FavoriteFilmType = {
  id: number | undefined;
  status: number;
}
