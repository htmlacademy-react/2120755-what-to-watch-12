export type FilmType = {
  name: string;
  posterImage: string;
  previewImage?: string;
  backgroundImage: string;
  backgroundColor?: '#A39E81';
  description?: string;
  rating?: number;
  scoresCount?: number;
  director?: string;
  starring?: string[];
  runTime?: number;
  genre: string;
  released: number;
  id?: number;
  isFavorite?: boolean;
  videoLink?: string;
  previewVideoLink?: string;
}
