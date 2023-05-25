import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoutes } from '../utils/const';
import { FilmType } from '../types';

function createAsyncThunkTeamplate<ResultType, TargetType>() {
  return createAsyncThunk<
  ResultType,
  TargetType,
  {extra: AxiosInstance}
  >;
}

export const fetchFilms = createAsyncThunkTeamplate<FilmType[], undefined>()(
  'GET to /films',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmType[]>(ApiRoutes.Films);
    return data;
  },
);
