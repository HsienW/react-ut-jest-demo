import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {CounterRedux} from  '../../Redux/Modules';

// export const promise = new Promise((resolve, reject) => {
//     const callState = true;
//     if (callState) {
//         setTimeout(() => {
//             resolve({
//                 msg: 'success',
//                 data: {
//                     'name': 'joe',
//                     'sex': 'man'
//                 }
//             });
//         }, 1000);
//     } else {
//         reject({
//             msg: 'fail',
//             data: {}
//         });
//     }
// });
//
// export class Counter extends Component {
//
//     state = {
//         count: 0,
//         list: ['one', 'two']
//     };
//
//     addCount = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//         // this.props.CounterActionsCreator.addNumber();
//     };
//
//     // addTenCount = (event) => {
//     //     if (event.keyCode === 32) {
//     //         this.setState({
//     //             count: this.state.count + 10
//     //         });
//     //     }
//     // };
//
//     decrement = () => {
//         this.setState({
//             count: this.state.count - 1
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <p>{`Count: ${this.state.count}`}</p>
//                 <br/>
//                 <button className='add' type='button' onClick={this.addCount}>+ 1</button>
//                 <button className='decrement' onClick={this.decrement}>- 1</button>
//             </div>
//         );
//     }
// }
//
// export class CounterTwo extends Component {
//
//     state = {
//         count: 0
//     };
//
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     };
//
//     decrement = () => {
//         this.setState({
//             count: this.state.count - 1
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <br/>
//                 <button className='increment' onClick={this.increment}>+1</button>
//                 <button className='decrement' onClick={this.decrement}>-1</button>
//             </div>
//         );
//     }
// }
//
// export class CounterThree extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             age: ''
//         };
//     }
//
//     componentDidMount() {
//         this.callApi().then(data => {
//             this.setState({
//                 name: data.name,
//                 age: data.age
//             });
//         });
//     }
//
//     callApi = () => {
//         return axios.get('http://localhost:4000/posts', {method: 'GET'})
//             .then(respond => {
//                 console.log(respond);
//                 return respond.data;
//             }).catch(error => {
//                 console.log(error.data);
//             });
//     };
//
//     render() {
//         return (
//             <div>
//                 <p className='name'>{this.state.name}</p>
//                 <p className='age'>{this.state.age}</p>
//             </div>
//         );
//     }
// }
//
// export class CounterFour extends Component {
//
//     state = {
//         value: ''
//     };
//
//     onInputChanged = (event) => {
//         this.setState({
//             value: event.target.value
//         });
//     };
//
//     onClicked = () => {
//         this.postValue(this.state.value)
//             .then(respond => {
//                 this.setState({
//                     value: respond
//                 });
//             });
//     };
//
//     postValue = (value) => {
//         return axios.post('http://localhost:4000/posts', {
//             method: 'POST',
//             body: JSON.stringify({value}),
//         }).then(() => {
//             return '';
//         });
//     };
//
//     render() {
//         return (
//             <div className="form">
//                 <input className="input" value={this.state.value} onChange={this.onInputChanged}/>
//                 <button className="submit" onClick={this.onClicked}>submit</button>
//             </div>
//         );
//     }
// }

export class Hello extends Component {

    state = {
        message: ''
    };

    hello = () => {
        console.log('test');
        console.log('test-2');
    };

    change = (value) => {
        if (value) {
            this.setState({message: 'changed'});
        } else {
            this.setState({message: ''});
        }
    };

    // changeTwo = (value) => {
    //     if (value) {
    //         this.setState({message: 'changed'});
    //     } else {
    //         this.setState({message: ''});
    //     }
    // };

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button className="btn">onChange</button>
            </div>
        );
    }
}

// CounterTwo.propTypes = {
//     counterTwo: PropTypes.number,
// };

//
// export default connect(
//     (state) => {
//         return {action: state.CounterReducer.action};
//     },
//     (dispatch) => {
//         return {
//             CounterActionsCreator: bindActionCreators(CounterRedux.CounterActions, dispatch),
//         };
//     }
// )(Counter);
