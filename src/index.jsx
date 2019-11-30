import React from 'react';
import createHistory from 'history/createHashHistory';
import ReduxStore from './Redux/ReduxStore';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Router, Switch, Route} from 'react-router-dom';
import {Auth, Home} from './page-loadable';
import {CommonLayout} from '../src/Components/CommonLayout';

const history = createHistory();

render((
    <Provider store={ReduxStore}>
        <HashRouter>
            <Router history={history}>
                <div style={{width: '100%', height: '100%'}}>
                    <Switch>
                        <CommonLayout>
                            <Route path='/auth' component={Auth}/>
                            <Route path='/home' component={Home}/>
                        </CommonLayout>
                    </Switch>
                </div>
            </Router>
        </HashRouter>
    </Provider>
), document.getElementById('app'));
