import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import WinwheelPage from '../components/WinwheelPage';
import NotFoundPage from '../components/NotFoundPage';

const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/winwheel' component={WinwheelPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;