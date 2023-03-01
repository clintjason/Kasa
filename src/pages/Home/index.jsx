import './_Home.scss';
import Home_header_img from '../../assets/img/home_body_header_Img.png';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

const Home = (props) => {
  document.title = props.pageTitle;
  return (
    <div className="home__body">
      <Banner  bannerImg={Home_header_img} bannerTitle="Chez vous, partout et ailleurs" bannerImgAlt="Home Image Header Banner" />
      <Gallery housingData={props.housingData} />
    </div>
  )
}
export default Home;