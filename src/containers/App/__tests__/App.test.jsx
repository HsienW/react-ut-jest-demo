import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from '../App';


Enzyme.configure({adapter: new Adapter()});

describe('Counter component', () => {
    it('should created', () => {
        const component = Enzyme.shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});

