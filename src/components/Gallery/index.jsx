import Card from '../Card';

const Gallery = (props) => {
  return (
    <div className='gallery flex-row space-evenly'>
      {props.housingData.map((data) => <Card house={data} key={data.id} />)}
    </div>
  )
}

export default Gallery;