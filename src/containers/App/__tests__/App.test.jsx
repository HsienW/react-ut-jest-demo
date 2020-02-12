import React from 'react';
import Enzyme from 'enzyme';
import {App} from '../App';


describe('Counter component', () => {
    it('should created', () => {
        const component = Enzyme.shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});

