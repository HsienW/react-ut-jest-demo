import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Product} from '../Product';

Enzyme.configure({adapter: new Adapter()});


describe('Product container', () => {
    const wrapper = shallow(<Product/>);

    it('should created container', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

