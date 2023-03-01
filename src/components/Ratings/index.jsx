import './_ratings.scss';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons' */
import filled_star from '../../assets/img/star_filled.svg'
import empty_star from '../../assets/img/star_empty.svg'
const Rating = (props) => {
  const numberOfColorRatings = props.rate;
  const numberOfUnColorRatings = 5 - props.rate;
  return (
    <div className='rating'>
      {Array.from(Array(numberOfColorRatings), (e,i) => (<img src={filled_star} alt="Filled star" className='star filled' key={i} />) )}
      {Array.from(Array(numberOfUnColorRatings), (e,i) => <img src={empty_star} alt="Empty star" className='star empty' key={i} /> )}
    </div>
  )
}

export default Rating;