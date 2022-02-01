import './NotFound.css';
import logo from '../../assets/Logo.png';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <span className="not-found-image-container">
        <img src={logo}></img>
      </span>
      <span className="not-found-text-container">
        <h1 className="not-found-h1">OOPS!</h1>
        <h1 className="not-found-middle-section">Error 404</h1>
        <h3>Page Not Found</h3>
      </span>
    </div>
  );
};

export default NotFound;
