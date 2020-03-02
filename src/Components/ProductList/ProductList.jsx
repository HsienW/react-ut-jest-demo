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

    search = () => {
        event.preventDefault();
        this.props.doListSearch(this.state.searchKey);
    };

    render() {
        const {listData} = this.props;
        return (
            <div>
                <h2>Product-list</h2>
                <input type="text" value={this.state.searchKey} onChange={this.changeKey}/>
                <button onClick={this.search}>Search</button>
                <ul>
                    {
                        listData.length !== 0
                            ? listData.map((item) => {
                                return (
                                    <li key={item.id}>{item.name}</li>
                                );
                            })
                            : <div>No data</div>
                    }
                </ul>
            </div>
        );
    }
}

ProductList.defaultProps = {
    listData: [],
    doListSearch: () => {}
};

ProductList.propTypes = {
    listData: PropTypes.array.isRequired,
    doListSearch: PropTypes.func.isRequired
};
