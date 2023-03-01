import './_Banner.scss';
const Banner = (props) => {
  return (
    <section className="banner center-all">
      {props.bannerTitle && <h1 className='banner__heading'>{props.bannerTitle}</h1>}
      <img src={props.bannerImg} alt={props.bannerImgAlt} className='banner__img' />
    </section>
  )
}

export default Banner;