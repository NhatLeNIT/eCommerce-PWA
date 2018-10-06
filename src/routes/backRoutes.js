import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import ProtectedRoute from './../components/ProtectedRoute';
import Dashboard from './../containers/Back/Dashboard';
import Login from './../containers/Back/Login';

export default () => {
    return (
        <Fragment>
            <ProtectedRoute path="/admin" exact component={Dashboard} />
            <Route path="/admin/login" exact component={Login} />
            <ProtectedRoute path="/admin/dashboard" exact component={Dashboard} />
           
        </Fragment>
    )
}

