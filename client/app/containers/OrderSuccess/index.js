/*
 *
 * OrderSuccess
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class OrderSuccess extends React.PureComponent {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchOrder(id);
    window.open('https://api.whatsapp.com/send?phone=+573186284444&text=Hola,%20Quiero%20realizar%20una%20compra%20con%20un%20ID%20de%20pedido:%20' + id, '_blank');
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const id = this.props.match.params.id;
      this.props.fetchOrder(id);
    }
  }

  render() {
    const { order, isLoading } = this.props;

    return (
      <div className='order-success'>
        {isLoading ? (
          <LoadingIndicator />
        ) : order._id ? (
          <div className='order-message'>
            <h2>Gracias por su orden.</h2>
            <p>
            El pedido{' '}
              <Link
                to={{
                  pathname: `/order/${order._id}?success`,
                  state: { prevPath: location.pathname }
                }}
                // to={`/order/${order._id}?success`}
                className='order-label'
              >
                #{order._id}
              </Link>{' '}
              está completo.
            </p>
            <p>En breve se le enviará un correo electrónico de confirmación.</p>
            <div className='order-success-actions'>
              <Link to='/dashboard/orders' className='btn-link'>
                Administrar pedidos
              </Link>
              <Link to='/shop' className='btn-link shopping-btn'>
                Seguir comprando
              </Link>
            </div>
          </div>
        ) : (
          <NotFound message='No order found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order.order,
    isLoading: state.order.isLoading
  };
};

export default connect(mapStateToProps, actions)(OrderSuccess);
