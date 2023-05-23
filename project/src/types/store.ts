import {store} from '../store';
import { FilmType } from './index';

// export type LoadingState = {
//   isLoaded: boolean;
//   isOfferLoaded:boolean;
// }

// export type AuthorizationState = {
//   authorized: boolean;
//   userData: UserData | undefined;
// }

export type FilmsState = {
  genre: string;
  initialFilms: FilmType[] | undefined;
  filmsToShow: FilmType[] | undefined;
}

// export type ChosenOfferState = {
//   offerToShow: Offer | undefined | null;
//   offersNearby: Offer[] | undefined;
//   offerReviews: ReviewObject[] | undefined;
//   hoveredOffer: Offer | undefined;
// }

export type InitialState = {
// loading: LoadingState;
// authorization: AuthorizationState;
films: FilmsState;
// chosenOffer: ChosenOfferState;
}

export type AppDispatch = typeof store.dispatch;
