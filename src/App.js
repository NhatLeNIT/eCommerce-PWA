import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr';
// import BackRoutes from './routes/backRoutes';
import ProtectedRoute from './components/ProtectedRoute';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Back/Dashboard';
import Login from './containers/Back/Login';
import Page404 from './containers/Back/ErrorPages/404';
class App extends Component {
    render() {
        return (
            <Fragment>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="bottom-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick />

                <Switch>
                    <ProtectedRoute path="/admin" exact component={Dashboard} />
                    <Route path="/admin/login" exact component={Login} />
                    <ProtectedRoute path="/admin/dashboard" exact component={Dashboard} />
                    <Route component={Page404} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
