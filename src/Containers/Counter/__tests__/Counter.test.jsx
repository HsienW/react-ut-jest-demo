import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter, CounterTwo, CounterThree} from '../Counter';
import renderer from 'react-test-renderer';
// import {CounterRedux} from '../../../Redux/Modules';
// import configureStore from 'redux-mock-store';

// const mockStore = configureStore([]);

// const clickFn = jest.fn();

Enzyme.configure({adapter: new Adapter()});

// describe('Counter Component', () => {
//     it('button click should hide component', () => {
//         const component = Enzyme.shallow(<Counter onClick={clickFn} />);
//         component.find('button#my-button-two').simulate('click');
//         expect(clickFn).toHaveBeenCalled();
//     });
// });

describe('Counter two testing by Jest', () => {
    test('should created counter two', () => {
        const component = renderer.create(<CounterTwo/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Counter two testing by Jest', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<CounterTwo counter={1}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Counter two testing by Enzyme', () => {

    it('should created counter two renders', () => {
        const wrapper = Enzyme.mount(<CounterTwo />);
        expect(wrapper.find(CounterTwo).length).toEqual(1);
    });

    it('should passes all props to counter two', () => {
        const wrapper = Enzyme.mount(<CounterTwo />);
        const counterWrapper = wrapper.find(CounterThree);
        expect(counterWrapper.find('p').text()).toEqual('8');
    });

    it('increments the counter', () => {
        const wrapper = Enzyme.mount(<CounterTwo />);
        wrapper.find('button').at(0).simulate('click');
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('1');
    });

    it('decrements the counter', () => {
        const wrapper = Enzyme.mount(<CounterTwo />);
        wrapper.find('button').at(1).simulate('click');
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('-1');
    });
});

describe('Counter testing', () => {

    // it('should created counter', () => {
    //     const wrapper = Enzyme.shallow(<Counter/>);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it('should render banner text correctly with given strings', () => {
    //     const strings = ['one', 'two'];
    //     const wrapper = Enzyme.shallow(<Counter list={strings}/>);
    //     expect(wrapper).toMatchSnapshot();
    // });

    // it('should be possible to activate button with Spacebar', () => {
    //     const component = Enzyme.mount(<Counter/>);
    //     component.find('button#add-ten-button').simulate('keydown', {keyCode: 32});
    //     expect(component).toMatchSnapshot();
    //     component.unmount();
    // });

    it('starts with a count of 0', () => {
        const wrapper = Enzyme.shallow(<Counter/>);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 0');
    });

    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = Enzyme.shallow(<Counter/>);
        const addBtn = wrapper.find('button.add');
        addBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 1');
    });

    it('decrements count by 1 when the decrement button is clicked', () => {
        const wrapper = Enzyme.shallow(<Counter/>);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: -1');
    });

    // it('calls componentDidMount', () => {
    //     jest.spyOn(App.prototype, 'componentDidMount')
    //     const wrapper = shallow(<App />)
    //     expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
    // })

    // it('matches the snapshot', () => {
    //     const tree = renderer.create(<Counter />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });

});

// describe('Addition', () => {
//     it('knows that 2 and 2 make 4', () => {
//         expect(2 + 2).toBe(4);
//     });
// });

// describe('<Counter>', () => {
//
//     const store = mockStore({count: 0});
//
//     const counter = mount(<Counter store={store} />);
//
//     test('test actions', () => {
//         counter.find('button').simulate('click');
//
//         // const expectAction = {
//         //     type: CounterRedux.CounterActions.addCounter,
//         //     payload: {addQuantity: 1},
//         // };
//         expect(store.getActions().length).toBe(1);
//
//         // expect(counter.addCount()).toEqual(expectAction);
//     });
// });