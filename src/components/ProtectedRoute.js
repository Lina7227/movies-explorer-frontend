import React from 'react';
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
    return (
      <Route>
        {
          () => props.islogOn ? <Component {...props} /> : <Navigate to="./sign-in" />
        }
      </Route>
    )
}

export default ProtectedRoute;
  