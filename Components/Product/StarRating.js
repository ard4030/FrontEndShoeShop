
import Rating from 'react-rating';
import {BsStar,BsStarFill} from "react-icons/bs"

function StarRating(props) {
  const { initialRating, onRatingChange } = props;

  const handleRatingChange = value => {
    onRatingChange(value);
  }

  return (
    <Rating
      initialRating={initialRating}
      emptySymbol={<BsStar style={{color:"gold"}} />}
      fullSymbol={<BsStarFill style={{color:"gold"}} />}
      onChange={handleRatingChange}
    />
  );
}

export default StarRating;