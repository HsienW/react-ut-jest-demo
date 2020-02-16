import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProductList} from '../ProductList';
import {successData} from '../../../Api/ApiSimulation';


Enzyme.configure({adapter: new Adapter()});

describe('ProductList component', () => {
    const wrapper = shallow(<ProductList listData={() => {}}/>);

    it('should created component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should get props', () => {
        expect(wrapper.find('li').props().value).toEqual(successData);
    });
});

