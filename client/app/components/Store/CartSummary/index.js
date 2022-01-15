/**
 *
 * CartSummary
 *
 */

import React from 'react';

import { Container, Row, Col } from 'reactstrap';

const CartSummary = props => {
  const { cartTotal } = props;

  return (
    <div className='cart-summary'>
      <Container>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>NOTA: El Envio Del Producto Es Pagado En La Dirección Proporcionada</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>Valor A todo Colombia entre $70.000 y $90.000 COL</p>
          </Col>
        </Row>
        <Row className='mb-2 summary-item'>
          <Col xs='9'>
            <p className='summary-label'>Total</p>
          </Col>
          <Col xs='3' className='text-right'>
            <p className='summary-value'>${cartTotal}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartSummary;
