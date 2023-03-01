import './_slider.scss';

const Slider = (props) => {
  return (
    <div className={props.direction ? props.direction + ' slider' : 'slider'}>
      <img src={props.slide} alt={'Slide Number ' + props.altSlide} className="slider__img"/>
    </div>
  )
}
export default Slider;