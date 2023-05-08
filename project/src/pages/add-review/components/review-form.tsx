import { Fragment } from 'react';
import { rating } from '../../../utils/data';

function ReviewForm(): JSX.Element {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Object.entries(rating).reverse().map(([key, value]) => (
              <Fragment key={value}>
                <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={key} />
                <label className="rating__label" htmlFor={`star-${key}`}>{value}</label>
              </Fragment>))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ReviewForm;
