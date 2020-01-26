import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {CounterRedux} from  '../../Redux/Modules';

export class Counter extends Component {

    state = {
        count: 0,
        list: ['one', 'two']
    };

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        });
        // this.props.CounterActionsCreator.addNumber();
    };

    // addTenCount = (event) => {
    //     if (event.keyCode === 32) {
    //         this.setState({
    //             count: this.state.count + 10
    //         });
    //     }
    // };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <p>{`Count: ${this.state.count}`}</p>
                <br />
                <button className="add" type="button" onClick={this.addCount}>+ 1</button>
                <button className="decrement" onClick={this.decrement}>- 1</button>
            </div>
        );
    }
}

// Counter.propTypes = {
//     CounterActionsCreator: PropTypes.object.isRequired,
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
