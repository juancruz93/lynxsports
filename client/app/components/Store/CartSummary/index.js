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
          <Col xs='9'>
            <p className='summary-label'>Medios De Pago</p><br></br>
            <p className='summary-label'>Tarjeta de credito, Visa, Mastercard, Efectivo</p><br></br>
            <p className='summary-label'>Trasferencia Bancaria, Efecty, Colpatria, Bancolombia, Super Giros</p><br></br>
            <img width="65" height="18" src='/images/mastercard.png' /><img width="65" height="18"  src='/images/visa.png' /><img width="65" height="18"  src='/images/efecty.png' /><img width="65" height="18"  src='/images/Davi.png' /><img width="65" height="18" src='/images/giros.png' /><img width="65" height="18" src='/images/bancolombia.png' />
            
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
