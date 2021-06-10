import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import TodoHome from './pages/todo/todohome';
import Counter from './pages/counter';
import Users from './pages/users';
import Theme from './components/theme';
import Auth from './pages/auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { object } from 'prop-types';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Theme>
        <Switch>
          <Route path="/todo">
            <TodoHome />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
