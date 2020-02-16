import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../Counter';

Enzyme.configure({adapter: new Adapter()});

describe('Counter component', () => {
    const wrapper  = shallow(<Counter/>);

    it('should created component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Counter component full dom', () => {
    const wrapper  = mount(<Counter/>);

    it('should render full dom', () => {
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('.increment').length).toEqual(1);
        expect(wrapper.find('.decrement').length).toEqual(1);
    });
});

describe('increment() function testing', () => {
    const wrapper  = mount(<Counter/>);
    const counter = wrapper.find(Counter);

    it('count value should equal 1', () => {
        counter.find('button.increment').simulate('click');
        expect(counter.find('p').text()).toEqual('1');
    });
});

describe('decrement() function testing', () => {
    const wrapper = mount(<Counter/>);
    const counter = wrapper.find(Counter);

    it('count value should equal -1', () => {
        wrapper.find('button.decrement').simulate('click');
        expect(counter.find('p').text()).toEqual('-1');
    });
});