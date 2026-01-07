import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <a href="https://http.cat/status/404" className="error-title">Error 404</a>
      <p className="error-description">Te equivocaste de url, revisa las rutas 👀</p>
      <Link to="/home" className="error-link">Volver al inicio</Link>
    </div>
  );
};

export default Error404;
