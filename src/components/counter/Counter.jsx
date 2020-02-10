import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CounterActions} from '../../Redux/Modules/CounterRedux';

export class Counter extends Component {

    state = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <div className='number'>{this.state.count}</div>
                <br/>
                <button className='increment' onClick={this.increment}>+1</button>
                <button className='decrement' onClick={this.decrement}>-1</button>
            </div>
        );
    }
}


Counter.propTypes = {
    counterTwo: PropTypes.number,
};


export default connect(
    (state) => {
        return {action: state.CounterReducer.action};
    },
    (dispatch) => {
        return {
            CounterActionsCreator: bindActionCreators(CounterActions, dispatch),
        };
    }
)(Counter);
