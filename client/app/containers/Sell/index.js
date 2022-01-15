/*
 *
 * Sell
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

class Sell extends React.PureComponent {
  render() {
    const {
      sellFormData,
      formErrors,
      sellFormChange,
      sellWithUs,
      isSubmitting,
      isLoading
    } = this.props;

    const handleSubmit = event => {
      event.preventDefault();
      sellWithUs();
    };

    return (
      <div className='sell'>
        {isLoading && <LoadingIndicator />}
        <h2>¡CONVIÉRTASE EN UN VENDEDOR DE LA TIENDA LYNXSPORTS!</h2>
        <hr />
        <Row>
          <Col xs='12' md='6' className='order-2 order-md-1'>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs='12'>
                  <Input
                    type={'text'}
                    error={formErrors['name']}
                    label={'Nombre'}
                    name={'name'}
                    placeholder={'Tú Nombre Completo'}
                    value={sellFormData.name}
                    onInputChange={(name, value) => {
                      sellFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12'>
                  <Input
                    type={'text'}
                    error={formErrors['email']}
                    label={'Dirección De Correo Electrónico'}
                    name={'email'}
                    placeholder={'Tú direccion De Correo Electrónico'}
                    value={sellFormData.email}
                    onInputChange={(name, value) => {
                      sellFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12'>
                  <Input
                    type={'text'}
                    error={formErrors['phoneNumber']}
                    label={'Número De Teléfono'}
                    name={'phoneNumber'}
                    placeholder={'Tú Número De Teléfono'}
                    value={sellFormData.phoneNumber}
                    onInputChange={(name, value) => {
                      sellFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12'>
                  <Input
                    type={'text'}
                    error={formErrors['brand']}
                    label={'Marca'}
                    name={'brand'}
                    placeholder={'Tú Marca Commercial'}
                    value={sellFormData.brand}
                    onInputChange={(name, value) => {
                      sellFormChange(name, value);
                    }}
                  />
                </Col>
                <Col xs='12'>
                  <Input
                    type={'textarea'}
                    error={formErrors['business']}
                    label={'Descripción De Marca'}
                    name={'business'}
                    placeholder={'Por Favor Describe Tu Marca Comercial'}
                    value={sellFormData.business}
                    onInputChange={(name, value) => {
                      sellFormChange(name, value);
                    }}
                  />
                </Col>
              </Row>
              <hr />
              <div className='sell-actions'>
                <Button type='submit' text='Enviar' disabled={isSubmitting} />
              </div>
            </form>
          </Col>
          <Col xs='12' md='6' className='order-1 order-md-2'>
            <Row>
              <Col xs='12' className='order-2 order-md-1 text-md-center mb-3'>
                <div className='agreement-banner-text'>
                  <h3>¿Te Gustaría Vender Tus Productos En LYNXSPORTS?</h3>
                  <h4>Haz Crecer Tu Negocio Con LYNXSPORTS</h4>
                  <b>APLICA HOY!!</b>
                </div>
              </Col>

              <Col
                xs='12'
                className='order-1 order-md-2 text-center mb-3 mb-md-0'
              >
                <img
                  className='agreement-banner'
                  src={'/images/banners/agreement.svg'}
                  alt='agreement banner'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sellFormData: state.merchant.sellFormData,
    formErrors: state.merchant.formErrors,
    isSubmitting: state.merchant.isSellSubmitting,
    isLoading: state.merchant.isSellLoading
  };
};

export default connect(mapStateToProps, actions)(Sell);
