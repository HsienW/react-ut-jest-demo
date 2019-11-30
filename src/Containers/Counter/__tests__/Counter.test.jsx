import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../Counter';
import {CounterRedux} from  '../../../Redux/Modules';

Enzyme.configure({adapter: new Adapter()});

describe('<Counter>', () => {
    const counter = shallow(<Counter/>);

    test('test actions', () => {
        const expectAction = {
            type: CounterRedux.CounterActions.addCounter,
            payload: {addQuantity: 1},
        };
        expect(counter.addCount()).toEqual(expectAction);
    });
});