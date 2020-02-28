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
        const {listData} = this.props;
        return (
            <div>
                <h2>Product-list</h2>
                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.searchKey} onChange={this.changeKey}/>
                </form>
                <ul>
                    {
                        listData.length !== 0
                            ? listData.map((item) => {
                                return (
                                    <li key={item.id}>{item.name}</li>
                                );
                            })
                            : <div>Loading...</div>
                    }
                </ul>
            </div>
        );
    }
}

ProductList.defaultProps = {
    listData: [],
};

ProductList.propTypes = {
    listData: PropTypes.array.isRequired
};
