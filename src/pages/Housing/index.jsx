import { useParams } from "react-router-dom";
import Tag from '../../components/Tag';
import Rating from "../../components/Ratings";
import Avatar from "../../components/Avatar";
import Collapse from "../../components/Collapse";
import Error404 from "../Error/404";
import Carrousel from "../../components/Carrousel";
import './_housing.scss';
const Housing = (props) => {
  document.title = props.pageTitle;
  const { id } = useParams();
  const house = props.housingData.find(data => data.id === id)
  if (!house) {
    return <Error404 />;
  }
  
  return (
    <div className="housing">
      {<Carrousel pictures={house.pictures} /> }
      <div className="housing__info__wrapper flex-row">
        <div className="housing__details">
          <h2>{house.title}</h2>
          <p>{house.location}</p>
          <div className="flex-row">
            {house.tags.map((tag) => <Tag tag={tag} key={tag} />)}
          </div>
        </div>
        <div className="flex-row housing__avatar align-center">
          <Rating rate={parseInt(house.rating)} />
          <div className="order-first">
            <Avatar host={house.host} />
          </div>
        </div>
      </div>
      <div className="collapse_wrapper flex-row">
        <Collapse title="Description" description={house.description} />
        <Collapse title="Équipements" description={house.equipments} />
      </div>
    </div>
  )
}

export default Housing;