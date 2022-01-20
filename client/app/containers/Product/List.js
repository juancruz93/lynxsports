/*
 *
 * List
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/Manager/ProductList';
import SubPage from '../../components/Manager/SubPage';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import MaterialTable from "material-table";

const columns= [
  { title: 'Artista', field: 'artista' },
  { title: 'País de Origen', field: 'pais' },
  { title: 'Género(s)', field: 'genero' },
  { title: 'Ventas Estimadas (millones)', field: 'ventas', type: 'numeric'}
];
class List extends React.PureComponent {

  
  componentDidMount() {
    this.props.fetchProducts();



  }
  

  render() {
    const { history, products, isLoading } = this.props;

    return (
      <>
        <SubPage
          title='Productos'
          actionTitle='Añadir Producto'
          handleAction={() => history.push('/dashboard/product/add')}
        >
          {isLoading ? (
            <LoadingIndicator inline />
          ) : products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <NotFound message='no products found.' />
          )}
        </SubPage>

       
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.products,
    isLoading: state.product.isLoading,
    user: state.account.user
  };
};

export default connect(mapStateToProps, actions)(List);
