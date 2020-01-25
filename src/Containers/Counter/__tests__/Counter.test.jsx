import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../Counter';
// import {CounterRedux} from '../../../Redux/Modules';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

Enzyme.configure({adapter: new Adapter()});

describe('<Counter>', () => {

    const store = mockStore({count: 0});

    const counter = mount(<Counter store={store} />);

    test('test actions', () => {
        counter.find('button').simulate('click');

        // const expectAction = {
        //     type: CounterRedux.CounterActions.addCounter,
        //     payload: {addQuantity: 1},
        // };
        expect(store.getActions().length).toBe(1);

        // expect(counter.addCount()).toEqual(expectAction);
    });
});