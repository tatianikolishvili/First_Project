import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ props }) => {
  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav justify-content-left">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/todo" className="nav-link">
              Todo Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="nav-link">
              Auth Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
