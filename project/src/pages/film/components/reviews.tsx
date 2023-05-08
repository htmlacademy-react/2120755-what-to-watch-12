import { mockReviews } from '../../../mocks/mock-reviews';
import Review from './review';

function Reviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {mockReviews.map((review) => review.id % 2 !== 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
      <div className="film-card__reviews-col">
        {mockReviews.map((review) => review.id % 2 === 0 ?
          <Review key={review.id} review={review}/> : null)}
      </div>
    </div>
  );
}
export default Reviews;
