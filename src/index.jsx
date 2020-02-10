import React from 'react';
import createHistory from 'history/createHashHistory';
import ReduxStore from './Redux/ReduxStore';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Router, Switch, Route} from 'react-router-dom';
import {App} from './Containers/App/App';

const history = createHistory();

render((
    <Provider store={ReduxStore}>
        <HashRouter>
            <Router history={history}>
                <div style={{width: '100%', height: '100%'}}>
                    <Switch>
                        <Route path='/app' component={App}/>
                    </Switch>
                </div>
            </Router>
        </HashRouter>
    </Provider>
), document.getElementById('app'));
