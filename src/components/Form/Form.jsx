import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export class Form extends Component {

    constructor() {
        super();
        this.account = React.createRef();
        this.password = React.createRef();
        this.state = {
            message: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({message: 'Sending...'});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Account: <input id="account " type="text" ref={this.account} /></div>
                <div>Password: <input id="password" type="text" ref={this.password}/></div>
                <input type="submit"/>
                <h2>{this.state.message}</h2>
            </form>
        );
    }
}


// Form.propTypes = {
// };
