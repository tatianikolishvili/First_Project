import { Link, Redirect, Route, Switch } from 'react-router-dom';
import SignInForms from '../../components/forms/sign-in-forms';
import SignUpForms from '../../components/forms/sign-up-forms';

function Auth() {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <h2> Auth Page</h2>
        <nav class="nav">
          <Link
            className="nav-link active"
            aria-current="page"
            href="#"
            to="/auth/sign-in-form">
            Sign In
          </Link>
          <Link
            className="nav-link"
            aria-current="page"
            href="#"
            to="/auth/sign-up-form">
            Sign Up
          </Link>
        </nav>
      </div>
      <div className="row">
        <Switch>
          <Route path="/auth/sign-in">
            <SignInForms />
          </Route>
          <Route path="/auth/sign-up">
            <SignUpForms />
          </Route>
          <Redirect to="/auth/sign-in" />
        </Switch>
      </div>
    </div>
  );
}

export default Auth;
