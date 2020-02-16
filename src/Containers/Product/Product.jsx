import React, {Component} from 'react';
import {ApiSimulation} from '../../Api/ApiSimulation';
import {ProductList} from '../../Components/ProductList/ProductList';

// import PropTypes from 'prop-types';


export class Product extends Component {

    state = {
        getListDataState: '',
        listData: []
    };

    componentDidMount() {
        ApiSimulation()
            .then((respond) => {
                console.log('tttttttttttttttttttt');
                console.log(respond);
                this.setState({
                    getListDataState: respond.state,
                    listData: respond.data
                });
            })
            .catch((error) => {
                this.setState({
                    getListDataState: error.state,
                    listData: error.data
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Product Page</h1>
                <ProductList listData={this.state.listData}/>
            </div>
        );
    }
}

// Product.propTypes = {
// };
