import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ props }) => {
  return (
    <header className="header pt-4">
      <h2 className="text-muted">Header</h2>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/todo" className="active">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/todo" className="active">
              Todo Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/counter" className="active">
              Counter Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="active">
              Users Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="active">
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
