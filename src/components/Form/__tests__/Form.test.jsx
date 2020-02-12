import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../Counter';


Enzyme.configure({adapter: new Adapter()});

describe('Counter component', () => {
    it('should created', () => {
        const component = Enzyme.shallow(<Counter/>);
        expect(component).toMatchSnapshot();
    });

    it('should render component', () => {
        const component = Enzyme.mount(<Counter/>);
        expect(component.find('p').length).toEqual(1);
        expect(component.find('.increment').length).toEqual(1);
        expect(component.find('.decrement').length).toEqual(1);
    });
});

describe('increment function testing', () => {
    const component = Enzyme.mount(<Counter/>);
    const counterWrapper = component.find(Counter);

    it('count value should equal 1', () => {
        counterWrapper.find('button.increment').simulate('click');
        expect(counterWrapper.find('p').text()).toEqual('1');
    });
});

describe('decrement function testing', () => {
    const component = Enzyme.mount(<Counter/>);
    const counterWrapper = component.find(Counter);

    it('count value should equal -1', () => {
        component.find('button.decrement').simulate('click');
        expect(counterWrapper.find('p').text()).toEqual('-1');
    });
});