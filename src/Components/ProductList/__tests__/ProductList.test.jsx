import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProductList} from '../ProductList';


Enzyme.configure({adapter: new Adapter()});


describe('ProductList component', () => {
    const wrapper = shallow(<ProductList listData={[]} doListSearch={() => {}}/>);

    it('should created component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ProductList props', () => {
    it('should get default props', () => {
        const props = {
            listData: [],
            doListSearch: () => {}
        };
        const wrapper = mount(<ProductList {...props}/>);
        expect(wrapper.prop('listData')).toEqual(props.listData);
        expect(wrapper.prop('doListSearch')).toEqual(props.doListSearch);
    });

    it('should get new props', () => {
        const props = {
            listData: [
                {
                    id: 1,
                    name: 'Apple'
                },
            ],
            doListSearch: () => {}
        };
        const wrapper = mount(<ProductList {...props}/>);
        expect(wrapper.find('ul').children()).toHaveLength(1);
    });
});

describe('ProductList function - search', () => {
    it('should change search key value', () => {
        const wrapper = mount(<ProductList listData={[]} doListSearch={() => {}}/>);
        wrapper.find('input').simulate('change', {target: {value: 'Apple'}});
        expect(wrapper.state('searchKey')).toEqual('Apple');
    });
});
