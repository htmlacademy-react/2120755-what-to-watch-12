import Review from './review';
import { ReviewObjectType } from '../../../types';

type ReviewsProps = {
  filmReviews: ReviewObjectType[];
}

function Reviews({filmReviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviews.map((review) => review.id % 2 !== 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
      <div className="film-card__reviews-col">
        {filmReviews.map((review) => review.id % 2 === 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
    </div>
  );
}
export default Reviews;
