import React from 'react';
import Enzyme from 'enzyme';
import {Form} from '../Form';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Form component', () => {
    it('should created', () => {
        const component = Enzyme.shallow(<Form/>);
        expect(component).toMatchSnapshot();
    });

    it('should render component', () => {
        const component = Enzyme.mount(<Form/>);
        expect(component.find('form').length).toEqual(1);
        expect(component.find('p').length).toEqual(3);
        expect(component.find('input#account').length).toEqual(1);
        expect(component.find('input#password').length).toEqual(1);
    });
});

describe('handleSubmit() function testing', () => {
    const component = Enzyme.mount(<Form/>);
    const form = component.find(Form);

    it('from data should equal right', () => {
        form.find('input#account').simulate('change', '123');
        form.find('input#password').simulate('change', '456');
        form.find('input#password').simulate('click');
        expect(form.find('h2#message').text()).toEqual('Sending...');
        expect(form.find('h2#account').text()).toEqual('123');
        expect(form.find('h2#password').text()).toEqual('456');
    });
});
