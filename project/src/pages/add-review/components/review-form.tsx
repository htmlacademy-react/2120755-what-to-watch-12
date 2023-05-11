import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { rating } from '../../../utils/data';


function ReviewForm(): JSX.Element {
  const urlParams = useParams();
  const offerId = Number(urlParams.id);
  const [reviewData, setFormData] = useState({review: '', rating: '', id: offerId});
  const [formDisabled, setFormDisabled] = useState(false);
  const [selectedRating, setSelectedRating] = useState('');
  const formIsValidToSubmit = reviewData.review.length > 50 && reviewData.rating !== '';

  const formFillHandle = (event: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = event.target;
    setFormData({ ...reviewData, [name]: value });
    if (name === 'rating') {
      setSelectedRating(value);
    }
  };

  const resetForm = () => {
    setFormData({ review: '', rating: '', id: offerId });
    setSelectedRating('');
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    // dispatch ревью.
    resetForm();
    setFormDisabled(false);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={formSubmitHandle}>
        <div className="rating">
          <div className="rating__stars">
            {Object.entries(rating).reverse().map(([key, value]) => (
              <Fragment key={value}>
                <input
                  className="rating__input"
                  id={`star-${key}`}
                  type="radio"
                  name="rating" value={key}
                  checked={selectedRating === key}
                  onChange={formFillHandle}
                  disabled={formDisabled}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${key}`}
                >{value}
                </label>
              </Fragment>))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review"
            id="review"
            placeholder="Review text"
            value={reviewData.review}
            onChange={formFillHandle}
            disabled={formDisabled}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!formIsValidToSubmit}
            >Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ReviewForm;
