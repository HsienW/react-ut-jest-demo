import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CounterRedux} from  '../../Redux/Modules';

export class Counter extends Component {

    state = {
        count: 0
    };

    addCount = () => {
        this.props.CounterActionsCreator.addNumber();
    };

    render() {
        return (
            <div>
                <span>{`當前數字: ${this.state.count}`}</span>
                <br />
                <button type="button" onClick={this.addCount}>+ 1</button>
            </div>
        );
    }
}

Counter.propTypes = {
    CounterActionsCreator: PropTypes.object.isRequired,
};

export default connect(
    (state) => {
        return {action: state.CounterRedux.action};
    },
    (dispatch) => {
        return {
            CounterActionsCreator: bindActionCreators(CounterRedux.CounterActions, dispatch),
        };
    }
)(Counter);
