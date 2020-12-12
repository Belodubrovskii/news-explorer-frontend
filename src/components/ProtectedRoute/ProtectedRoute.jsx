import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  React.useEffect(() => {
    if (!props.loggedIn) {
      props.loginPopupOpen();
    }
  }, []);

  return (
    <Route>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        () => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)
      }
    </Route>
  );
};

export default ProtectedRoute;
