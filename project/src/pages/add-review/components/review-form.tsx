import { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { rating } from '../../../utils/data';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';
import { postReview } from '../../../store/api-actions';
import { AppDispatch } from '../../../types/store';

function ReviewForm(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const filmId = Number(urlParams.id);
  const [reviewData, setFormData] = useState({comment: '', rating: '', id: filmId});
  const [formDisabled, setFormDisabled] = useState(false);
  const [selectedRating, setSelectedRating] = useState('');
  const choosenFilm = useSelector(filmToShowSelector);
  const formIsValidToSubmit = reviewData.comment.length > 50 && reviewData.rating !== '';

  const formFillHandle = (event: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = event.target;
    setFormData({ ...reviewData, [name]: value });
    if (name === 'rating') {
      setSelectedRating(value);
    }
  };

  const resetForm = () => {
    setFormData({ comment: '', rating: '', id: filmId });
    setSelectedRating('');
  };

  const formSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    dispatch(postReview(reviewData));
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
        <div className="add-review__text" style={{backgroundColor: choosenFilm?.backgroundColor, border: '2px solid gray'}}>
          <textarea
            className="add-review__textarea"
            name="comment"
            id="comment"
            placeholder="Review text"
            value={reviewData.comment}
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
