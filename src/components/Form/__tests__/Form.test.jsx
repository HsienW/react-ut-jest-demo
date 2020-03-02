import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Form} from '../Form';

Enzyme.configure({adapter: new Adapter()});

describe('Form component', () => {
    const wrapper = shallow(<Form/>);

    it('should created component', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('should created snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Form component full dom', () => {
    const wrapper  = mount(<Form/>);

    it('should render full dom', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('p').length).toEqual(3);
        expect(wrapper.find('#account').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
    });
});

// describe('handleSubmit() function testing', () => {
//     const component = mount(<Form/>);
//     const form = component.find(Form);
//
//     it('from data should equal right', () => {
//         form.find('input#account').simulate('change', {target: {value: '123'}});
//         form.find('input#password').simulate('change', {target: {value: '456'}});
//         form.find('input#password').simulate('click');
//         // expect(counter.find('p').text()).toEqual('1');
//         expect(form.find('h2#message').text()).toEqual('Sending...');
//         expect(form.find('h2#show-account').text()).toEqual('123');
//         expect(form.find('h2#show-password').text()).toEqual('456');
//     });
// });
