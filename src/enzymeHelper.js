import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context'; // mock ConnectedRouter
import configureStore from 'redux-mock-store'; // mock Provider

// set up Provider
const store = configureStore([])({});
store.dispatch = jest.fn();
const dispatch = store.dispatch;
const router = new ReactRouterEnzymeContext().get().context.router;

// assign props 'dispatch' into node, node is the component which we want to test.
function nodeWithProps(node) {
    return React.cloneElement(node, {dispatch});
}

// pass down the context of Provider and ConnectedRouter to shallow
export function shallowWithProviders(node) {
    return shallow(nodeWithProps(node), {context: {router, store}});
}

// pass down the context of Provider, intlProvider, MuiThemeProvider and ConnectedRouter to mount
export function mountWithProviders(node) {
    return mount(nodeWithProps(node), {
        context: {router, store},
        childContextTypes: {
            router: React.PropTypes.object,
            store: React.PropTypes.object,
        },
    });
}