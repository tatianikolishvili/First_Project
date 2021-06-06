import PropTypes from 'prop-types';
import css from './theme.module.css';

function Theme({ children, page }) {
  return <div className={'theme-container ${page}'}>{children}</div>;
}

Theme.propTypes = {
  page: PropTypes.string,
};

export default Theme;
