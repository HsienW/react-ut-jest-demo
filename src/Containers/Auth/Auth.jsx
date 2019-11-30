import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {AuthRedux} from  '../Redux/Modules';

export default class Auth extends Component {

    state = {
        count: 0,
        name: '初始',
    };

    render() {
        return (
            <div>
                請輸入姓名：
                <input
                    type="text" value={this.state.name}
                    onChange={(e) => { this.setState({name: e.target.value });}}
                />
                <br/>
                <span>{`${this.state.name}點了 ${this.state.count} 下`}</span>
                <br/>
                <button
                    onClick={()=>{ this.setState({count: this.state.count + 1});}}
                >
                    點我加 1
                </button>
            </div>
        );
    }
}

// Auth.propTypes = {
//     AuthActionsCreator: PropTypes.object.isRequired,
// };
//
// export default connect(
//     (state) => {
//         return {action: state.AuthReducer.action};
//     },
//     (dispatch) => {
//         return {
//             AuthActionsCreator: bindActionCreators(AuthRedux.AuthActionsCreator, dispatch),
//         };
//     }
// )(Auth);
