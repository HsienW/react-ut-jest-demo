import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import nock from 'nock';
// import waitUntil from 'async-wait-until';
// import {Counter, CounterTwo, CounterThree, CounterFour} from '../Counter';
import {Hello} from '../Counter';
// import renderer from 'react-test-renderer';
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

// describe('Counter two testing by Jest', () => {
//     test('should created counter two', () => {
//         const component = renderer.create(<CounterTwo/>);
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

// describe('Counter two testing by Jest', () => {
//     test('snapshot renders', () => {
//         const component = renderer.create(<CounterTwo/>);
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//     });
// });

//
// -----------
//
// describe('Counter two testing by Enzyme', () => {
//
//     it('should created counter two renders', () => {
//         const wrapper = Enzyme.mount(<CounterTwo/>);
//         expect(wrapper.find(CounterTwo).length).toEqual(1);
//     });
//
//     // it('should passes all props to counter two', () => {
//     //     const wrapper = Enzyme.mount(<CounterTwo />);
//     //     const counterWrapper = wrapper.find(CounterThree);
//     //     expect(counterWrapper.find('p').text()).toEqual('8');
//     // });
//
//     it('increments the counter', () => {
//         const wrapper = Enzyme.mount(<CounterTwo/>);
//         const counterWrapper = wrapper.find(CounterTwo);
//         wrapper.find('button.increment').simulate('click');
//         expect(counterWrapper.find('p').text()).toEqual('1');
//     });
//
//     it('decrements the counter', () => {
//         const wrapper = Enzyme.mount(<CounterTwo/>);
//         const counterWrapper = wrapper.find(CounterTwo);
//         wrapper.find('button.decrement').simulate('click');
//         expect(counterWrapper.find('p').text()).toEqual('-1');
//     });
// });
//
// // describe('Counter three testing call api is true', () => {
// //     beforeAll(() => {
// //         nock('http://localhost:8888/#')
// //             .get('/counter-three')
// //             .reply(200, {
// //                 name: 'joe',
// //                 age: 18
// //             });
// //     });
// //
// //     afterAll(() => {
// //         nock.cleanAll();
// //     });
// //
// //     it('case: expect component did mount will trigger re-render', async () => {
// //         const wrapper = Enzyme.mount(<CounterThree/>);
// //
// //         await waitUntil(() => wrapper.state('name') === 'joe');
// //         await waitUntil(() => wrapper.state('age') === 18);
// //
// //         expect(wrapper.find('p.name').text()).toBe('joe');
// //         expect(wrapper.find('p.age').text()).toBe('18');
// //     });
// // });
//
// describe('Counter three testing call api is false', () => {
//     beforeAll(() => {
//         nock('http://localhost:8888/#')
//             .get('/counter-three')
//             .reply(400, {});
//     });
//
//     afterAll(() => {
//         nock.cleanAll();
//     });
//
//     it('case: expect component did mount will trigger re-render', async () => {
//         const wrapper = Enzyme.mount(<CounterThree/>);
//
//         await waitUntil(() => true);
//
//         expect(wrapper.find('p.name').text()).toBe('');
//         expect(wrapper.find('p.age').text()).toBe('');
//     });
// });
//
// it('Counter four testing input & click call api', async () => {
//
//     beforeAll(() => {
//         nock('http://localhost:8888/#')
//             .post('/counter-four')
//             .reply(200, () => {
//                 return {};
//             });
//     });
//
//     afterAll(() => {
//         nock.cleanAll();
//     });
//
//
//     const wrapper = Enzyme.mount(<CounterFour/>);
//     const input = wrapper.find('input.input');
//     const button = wrapper.find('button.submit');
//
//     expect(input.exists());
//     expect(button.exists());
//
//     input.simulate('change', {
//         target: {
//             value: 'joe'
//         }
//     });
//
//     expect(wrapper.state('value')).toBe('joe');
//
//     button.simulate('click');
//
//     await waitUntil(() => true);
//
//     expect(wrapper.state('value')).toBe('');
// });
//
// describe('Counter testing', () => {
//
//     // it('should created counter', () => {
//     //     const wrapper = Enzyme.shallow(<Counter/>);
//     //     expect(wrapper).toMatchSnapshot();
//     // });
//
//     // it('should render banner text correctly with given strings', () => {
//     //     const strings = ['one', 'two'];
//     //     const wrapper = Enzyme.shallow(<Counter list={strings}/>);
//     //     expect(wrapper).toMatchSnapshot();
//     // });
//
//     // it('should be possible to activate button with Spacebar', () => {
//     //     const component = Enzyme.mount(<Counter/>);
//     //     component.find('button#add-ten-button').simulate('keydown', {keyCode: 32});
//     //     expect(component).toMatchSnapshot();
//     //     component.unmount();
//     // });
//
//     it('starts with a count of 0', () => {
//         const wrapper = Enzyme.shallow(<Counter/>);
//         const text = wrapper.find('p').text();
//         expect(text).toEqual('Count: 0');
//     });
//
//     it('increments count by 1 when the increment button is clicked', () => {
//         const wrapper = Enzyme.shallow(<Counter/>);
//         const addBtn = wrapper.find('button.add');
//         addBtn.simulate('click');
//         const text = wrapper.find('p').text();
//         expect(text).toEqual('Count: 1');
//     });
//
//     it('decrements count by 1 when the decrement button is clicked', () => {
//         const wrapper = Enzyme.shallow(<Counter/>);
//         const decrementBtn = wrapper.find('button.decrement');
//         decrementBtn.simulate('click');
//         const text = wrapper.find('p').text();
//         expect(text).toEqual('Count: -1');
//     });
//
//     // it('calls componentDidMount', () => {
//     //     jest.spyOn(App.prototype, 'componentDidMount')
//     //     const wrapper = shallow(<App />)
//     //     expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
//     // })
//
//     // it('matches the snapshot', () => {
//     //     const tree = renderer.create(<Counter />).toJSON();
//     //     expect(tree).toMatchSnapshot();
//     // });
//
// });
//
// -----------


describe('Testing hello person', () => {
    it('case: should render hello + name', async () => {
        const wrapper = Enzyme.shallow(<Hello/>);
        const displayState = wrapper.find('p').at(0);
        const button = wrapper.find('button').at(0);

        expect(wrapper.state('message')).toBe('');
        expect(displayState.text()).toBe('');
        expect(button.length).toEqual(1);


        // button.simulate('click', {target: {value: true}});
        // expect(wrapper.state('message')).toBe('changed');
    });
});