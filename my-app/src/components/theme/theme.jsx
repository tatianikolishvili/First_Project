import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import css from './theme.module.css';

function Theme({ children }) {
  const { pathname } = useLocation();
  const [themecolor, setThemeColor] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/todo':
        setThemeColor(css.todoHome);
        break;
      case '/counter':
        setThemeColor(css.counterHome);
        break;
      default:
        setThemeColor(css.home);
    }
  }, [pathname, setThemeColor]);

  return (
    <div className={classNames('theme-container', themecolor)}> {children}</div>
  );
}

Theme.propTypes = {
  page: PropTypes.string,
};

export default Theme;
