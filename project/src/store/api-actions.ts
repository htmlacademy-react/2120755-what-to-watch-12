import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../utils/const';
import { saveToken, removeToken } from '../utils/token';
import { FilmType, UserData, LoginData, ReviewObjectType, ReviewType } from '../types';

function createAsyncThunkTeamplate<ResultType, TargetType>() {
  return createAsyncThunk<
  ResultType,
  TargetType,
  {extra: AxiosInstance}
  >;
}

export const checkAuthAction = createAsyncThunkTeamplate<UserData | undefined, undefined>()(
  'GET to /login',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoutes.Login);
    return data;
  },
);

export const login = createAsyncThunkTeamplate<UserData, LoginData>()(
  'POST to /login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoutes.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logout = createAsyncThunkTeamplate<void, undefined>()(
  'DELETE to /login',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    removeToken();
  },
);

export const fetchFilms = createAsyncThunkTeamplate<FilmType[], undefined>()(
  'GET to /films',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(ApiRoutes.Films);
    return data;
  },
);

export const fetchPromoFilm = createAsyncThunkTeamplate<FilmType, undefined>()(
  'GET to /promo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType>(ApiRoutes.PromoFilm);
    return data;
  },
);

export const fetchUserFilms = createAsyncThunkTeamplate<FilmType[], undefined>()(
  'GET to /favorite',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(ApiRoutes.LikedFilms);
    return data;
  },
);

// export const postUserFilm = createAsyncThunkTeamplate<FilmType, undefined>()(
//   'POST to /favorite/',
//   async (_arg, {extra: api}) => {
//     const {data} = await api.get<FilmType>(`${ApiRoutes.LikedFilms}/${id}/${isFavorite}`);
//     return data;
//   },
// );

export const fetchFilmData = createAsyncThunkTeamplate<FilmType | undefined, number>()(
  'GET to /films/:id',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`${ApiRoutes.Film}${id}`);
      return data;}
    catch {
      return undefined;
    }
  });

export const fetchSimilarFilms = createAsyncThunkTeamplate<FilmType[]| undefined, number>()(
  'GET to /films/:id/similar',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${ApiRoutes.Film}${id}/similar`);
    return data;
  });

export const fetchFilmReviews = createAsyncThunkTeamplate<ReviewObjectType[] | undefined, number>()(
  'GET to /comments/:id',
  async (id, {extra: api}) => {
    const {data} = await api.get<ReviewObjectType[]>(`${ApiRoutes.FilmReviews}${id}`);
    return data;
  });

export const postReview = createAsyncThunkTeamplate<ReviewObjectType[], ReviewType>()(
  'POST to /comments/:id',
  async ({comment, rating, id}: ReviewType, {extra: api}) => {
    const {data} = await api.post<ReviewObjectType[]>(`${ApiRoutes.FilmReviews}${id}`, {comment, rating});
    return data;
  },
);
