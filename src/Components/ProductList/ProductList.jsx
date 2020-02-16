import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ProductList extends Component {

    state = {
        searchKey: ''
    };

    changeKey = (event) => {
        this.setState({
            searchKey: event.target.value
        });
    };

    submit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h2>Product-list</h2>
                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.searchKey} onChange={this.changeKey}/>
                </form>
                <ul>
                    {
                        this.props.listData.map((item) => {
                            return (
                                <li key={item.id}>{item.name}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}


ProductList.propTypes = {
    listData: PropTypes.array.isRequired
};
