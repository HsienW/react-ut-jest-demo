import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CommonLayout extends Component {
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


CommonLayout.propTypes = {
    children: PropTypes.object.isRequired,
};
