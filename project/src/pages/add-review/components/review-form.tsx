import { useState, ChangeEvent, FormEvent, Fragment, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { rating } from '../../../utils/data';
import { filmToShowSelector } from '../../../store/reducers/chosenFilm';
import { reviewUploadingStatusSelector, cleanReviewUploadingStatus } from '../../../store/reducers/loading';
import { postReview } from '../../../store/api-actions';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../../utils/const';
import { AppDispatch } from '../../../types/store';

function ReviewForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const urlParams = useParams();
  const filmId = Number(urlParams.id);
  const [reviewData, setFormData] = useState({comment: '', rating: '', id: filmId});
  const [formInputsDisabled, setInputsDisabled] = useState(false);
  const [formSubmitDisabled, setFormSubmitDisabled] = useState(true);
  const [selectedRating, setSelectedRating] = useState('');
  const choosenFilm = useSelector(filmToShowSelector);
  const reviewUploaded = useSelector(reviewUploadingStatusSelector);
  const formIsValidToSubmit = reviewData.comment.length > MIN_COMMENT_LENGTH && reviewData.comment.length < MAX_COMMENT_LENGTH && reviewData.rating !== '';

  useEffect(() => () => {
    dispatch(cleanReviewUploadingStatus());
    setFormData({ comment: '', rating: '', id: filmId });
    setSelectedRating('');
  }, [filmId, dispatch]);

  useEffect(() => {
    if (formIsValidToSubmit) {
      setFormSubmitDisabled(false);
    }
  }, [formIsValidToSubmit]);

  useEffect(() => {
    if(reviewUploaded === true) {
      navigate(`/films/${filmId}?tab=reviews`);
    } if (reviewUploaded === false) {
      setInputsDisabled(false);
      setFormSubmitDisabled(false);
      dispatch(cleanReviewUploadingStatus());
    }
  }, [reviewUploaded]);

  const handleFormFill = (event: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = event.target;
    setFormData({ ...reviewData, [name]: value });
    if (name === 'rating') {
      setSelectedRating(value);
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setInputsDisabled(true);
    setFormSubmitDisabled(true);
    dispatch(postReview(reviewData));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
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
                  onChange={handleFormFill}
                  disabled={formInputsDisabled}
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
            onChange={handleFormFill}
            disabled={formInputsDisabled}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={formSubmitDisabled}
            >Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ReviewForm;
