import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ProductList} from '../ProductList';


Enzyme.configure({adapter: new Adapter()});

describe('ProductList component', () => {
    const wrapper = shallow(<ProductList listData={() => {}}/>);

    it('should created component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // it('should get props', () => {
    //     expect(wrapper.find('li').props().value).toEqual(successData);
    // });
});

describe('should get props', () => {
    // DateInputComponent = mount(<DateInput {...props} />).find('.datepicker');
    // const spyDidMount = jest.spyOn(ProductList.prototype, 'componentDidMount');

    it('should get default props', () => {
        const props = {listData: []};
        const wrapper = mount(<ProductList {...props}/>);
        expect(wrapper.prop('listData')).toEqual(props.listData);
    });

    it('should get new props', () => {
        const props = {
            listData: [
                {
                    id: 1,
                    name: 'Apple'
                },
            ]
        };
        const wrapper = mount(<ProductList {...props}/>);
        // expect(wrapper.length).to.equal(1);
        // dateInput = DateComponent.find("input[type='text']");
        // expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
        // expect(wrapper.find('li').childAt(0)).to.equal(props.listData);
        expect(wrapper.find('ul').children()).toHaveLength(1);
    });
});

describe('should change search key', () => {
    it('check search onChange value', () => {
        const wrapper = mount(<ProductList listData={() => {}}/>);
        wrapper.find('input').simulate('change', {target: {value: 'apple'}});
        expect(wrapper.state('searchKey')).toEqual('apple');
    });
});
