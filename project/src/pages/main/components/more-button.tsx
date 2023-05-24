type MoreButtonProps = {
  onMoreClick: () => void;
}

function MoreButton({onMoreClick}: MoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button onClick={onMoreClick} className="catalog__button" type="button">Show more</button>
    </div>
  );
}
export default MoreButton;
