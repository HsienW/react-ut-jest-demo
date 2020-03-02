import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import {mountWithProviders} from 'enzymeHelper';
import {Product} from './index';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const setup = (props = {}) => {
    const wrapper = mountWithProviders(<MyContainer {...defaultProps} {...props} />);
    const actions = {
        testMethod: wrapper.instance().testMethod,
        testOtherMethod: wrapper.instance().testOtherMethod,
        mock: (...methods) => { //you need to implement mock() in every test.js
            methods.forEach((method) => {
                wrapper.instance()[method] = jest.fn();
                actions[method] = wrapper.instance()[method];
            });
        },
    };
    return {
        wrapper,
        actions,
        dispatch: wrapper.props().dispatch,
        // customize common DOM you want to test
        // ex: loginBtn: wrapper.find(FlatButton).at(0),
    };
};

// describe('App container', () => {
//     // const wrapper = shallow(<App/>);
//
//     it('should created container', () => {
//         expect(wrapper.exists()).toBe(true);
//     });
//
//     it('should created snapshot', () => {
//         expect(wrapper).toMatchSnapshot();
//     });
// });
//
