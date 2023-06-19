import { useSelector } from 'react-redux';
import Review from './review';
import { filmReviewsSelector } from '../../../store/reducers/chosenFilm';

function Reviews(): JSX.Element {
  const filmReviews = useSelector(filmReviewsSelector);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews?.map((review) => review.id % 2 !== 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
      <div className="film-card__reviews-col">
        {filmReviews?.map((review) => review.id % 2 === 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
    </div>
  );
}
export default Reviews;
