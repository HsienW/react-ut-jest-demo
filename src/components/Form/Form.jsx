import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export class Form extends Component {

    constructor() {
        super();
        this.account = React.createRef();
        this.password = React.createRef();
        this.state = {
            message: '',
            account: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            message: 'Sending...',
            account: this.account.current.value,
            password: this.password.current.value
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Account: <input id="account " type="text" ref={this.account}/></div>
                <p/>
                <div>Password: <input id="password" type="text" ref={this.password}/></div>
                <p/>
                <input type="submit"/>
                <p/>
                <h2 id="message">{this.state.message}</h2>
                <h2 id="show-account">{this.state.account}</h2>
                <h2 id="show-password">{this.state.password}</h2>
            </form>
        );
    }
}


// Form.propTypes = {
// };
