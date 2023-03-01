import './_card.scss';
import {Link} from 'react-router-dom';

const Card = (props) => {
  return (
    <Link className="card flex-column" to={`/housing/${props.house.id}`}>
      <div className="card__img">
        <img src={props.house.cover} alt={props.house.title} />
      </div>
      <h3 className='card__title'>{props.house.title}</h3>
    </Link>
  )
}
export default Card;