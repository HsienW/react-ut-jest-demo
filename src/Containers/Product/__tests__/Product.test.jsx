import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Product} from '../Product';
import {ApiSimulation, successData} from '../../../Api/ApiSimulation';

Enzyme.configure({adapter: new Adapter()});


describe('Product container', () => {
    const wrapper = shallow(<Product/>);

    it('should created container', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ProductList state', () => {
    it('should mock componentDidMount call api', async () => {
        const wrapper = mount(<Product />);
        await ApiSimulation();
        wrapper.update();
        expect(wrapper.state('getListDataState')).toEqual('success');
        expect(wrapper.state('originalListData')).toEqual(successData.data);
        expect(wrapper.state('displayListData')).toEqual(successData.data);
    });
});
