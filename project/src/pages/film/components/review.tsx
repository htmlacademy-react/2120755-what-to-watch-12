import { formatDateForFilmReviews } from '../../../utils/calculation-functions';
import { ReviewObjectType } from '../../../types';

type ReviewProps = {
  review: ReviewObjectType | undefined;
}

function Review({review}: ReviewProps): JSX.Element | null{
  if (review === undefined) {
    return null;
  }

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review?.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}> {formatDateForFilmReviews(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
export default Review;
