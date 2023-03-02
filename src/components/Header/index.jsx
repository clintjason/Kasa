import Header_logo from '../../assets/img/kasa_header_logo.svg';
import { NavLink } from "react-router-dom";
import './_Header.scss';

const Header = () => {
 
  return (
    <header className='header space-between align-center'>
      <NavLink className='header_img_wrapper' to='/'>
        <img src={Header_logo} alt="Kasa Header Logo" />
      </NavLink>
      <nav className='nav__links flex-row space-evenly'>
        <NavLink to="/" className={ ({isActive}) => isActive ? 'active nav__link' :'nav__link'} >Accueil</NavLink>
        <NavLink to="/about" className={ ({isActive}) => isActive ? 'active nav__link' :'nav__link'}>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header;