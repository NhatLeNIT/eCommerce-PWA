import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr';
// import BackRoutes from './routes/backRoutes';
import ProtectedRoute from './components/ProtectedRoute';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import Page404 from './containers/ErrorPages/404';
import Layout from './hoc/Layout';
import Dashboard from './containers/Dashboard';
import Users from './containers/Users';
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
                    <Route path="/login" exact component={Login} />
                    <Layout>
                        <Switch>
                            <ProtectedRoute path="/" exact component={Dashboard} />
                            <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                            <ProtectedRoute path="/users" component={Users} />
                            <Route component={Page404} />
                        </Switch>
                    </Layout>
                </Switch>


            </Fragment>
        );
    }
}

export default App;
