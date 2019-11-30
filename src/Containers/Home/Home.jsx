// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {HomeRedux} from '../Redux/Modules';
//
// class Home extends Component {
//
//     render() {
//         return (
//             <div>
//                 Home
//             </div>
//         );
//     }
// }
//
// Home.propTypes = {
//     HomeActionsCreator: PropTypes.object.isRequired,
// };
//
// export default connect(
//     (state) => {
//         return {action: state.HomeReducer.action};
//     },
//     (dispatch) => {
//         return {
//             HomeActionsCreator: bindActionCreators(HomeRedux.HomeActionsCreator, dispatch),
//         };
//     }
// )(Home);
