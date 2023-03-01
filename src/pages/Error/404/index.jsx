import './_404.scss';
import { Link } from 'react-router-dom';
const Error404 = () => {
  document.title = "kasa - Error 404";
  return (
    <div className="error_404">
      <div>
        <h1 className='error_404__title'>404</h1>
        <p className='error_404__desc'>Oups! La page que 
  vous demandez n'existe pas.</p>
      </div>
      <Link className='error_404__link' to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}
export default Error404;