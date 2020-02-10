import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../Counter';


Enzyme.configure({adapter: new Adapter()});

describe('Counter Component', () => {
    it('button click should render component', () => {
        const component = Enzyme.shallow(<Counter/>);
        expect(component.find('.number')).to.have.lengthOf(1);
        expect(component.find('.increment')).to.have.lengthOf(1);
        expect(component.find('.decrement')).to.have.lengthOf(1);
    });
});
