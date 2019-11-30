// import React from 'react';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Auth from '../Auth';
//
// Enzyme.configure({adapter: new Adapter()});
//
// describe('<Auth>', () => {
//     // 使用 shallow 將 Component Render 給 counter
//     const counter = shallow(<Auth/>);
//
//     test('Check initial state', () => {
//         //以 state('key') 的方式取得 state 的值
//         // counter.find('div').find('button').simulate('click');
//         // expect(counter.state('count')).toBe(1);
//         // expect(counter.find('div').find('span').text()).toBe('點了 1 下');
//         // expect(counter.state('count')).toBe(0);
//         // expect(counter.state('name')).toBe('');
//         //
//         // expect(counter.find('div').find('input').props().value).toBe('初始');
//         // counter.setState({name: '哈哈哈'});
//         // counter.find('div').find('button').simulate('click');
//         // counter.find('div').find('input').simulate('change', {target: {value: '哈哈哈',}});
//         // expect(counter.find('div').find('input').props().value).toBe('哈哈哈');
//         // expect(counter.find('div').find('span').text()).toBe('哈哈哈點了 1 下');
//     });
// });