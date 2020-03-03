import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ApiSimulation} from '../../Api/ApiSimulation';
import {ProductList} from '../../Components/ProductList/ProductList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ProductRedux} from '../../Redux/Modules/ProductRedux';


export class Product extends Component {

    state = {
        getListDataState: '',
        originalListData: [],
        displayListData: []
    };

    componentDidMount() {
        ApiSimulation()
            .then((respond) => {
                this.setState({
                    getListDataState: respond.state,
                    originalListData: respond.data,
                    displayListData: respond.data
                });
            })
            .catch((error) => {
                this.setState({
                    getListDataState: error.state,
                    originalListData: error.data,
                    displayListData: error.data
                });
            });
    }

    doProductSearch = (searchKey) => {
        if (searchKey === '') {
            this.setState({displayListData: this.state.originalListData});
            return;
        }

        let displayListData = this.state.originalListData.filter((item) => {
            return item.name === searchKey;
        });
        this.setState({displayListData: displayListData});
    };

    dispatchClick = () => {
        this.props.ProductActionsCreator.productSuccess();
    };

    render() {
        return (
            <div>
                <h1>Product Page</h1>
                <ProductList
                    listData={this.state.displayListData}
                    doListSearch={this.doProductSearch}
                />
                <button onClick={this.dispatchClick}>Dispatch Action</button>
            </div>
        );
    }
}

Product.propTypes = {
    ProductActionsCreator: PropTypes.object.isRequired
};

export default connect(
    (state) => {
        return {action: state.ProductReducer.action};
    },
    (dispatch) => {
        return {
            ProductActionsCreator: bindActionCreators(ProductRedux.ProductActionsCreator, dispatch)
        };
    }
)(Product);