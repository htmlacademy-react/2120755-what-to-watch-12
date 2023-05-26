import { ReviewObjectType } from '../../../types';

type ReviewProps = {
  review: ReviewObjectType | undefined;
}

function Review({review}: ReviewProps): JSX.Element | null{
  if (review === undefined) {
    return null;
  }

  const date = new Date(review.date);
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review?.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}> { formatter.format(date) }</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
export default Review;
