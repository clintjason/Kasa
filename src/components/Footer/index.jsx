import footer_logo from '../../assets/img/kasa_footer_logo.svg';
import './_footer.scss'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex-column center-all">
      <img src={footer_logo} alt="Kasa Footer Logo" />
      <p>&copy; {year} Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer;