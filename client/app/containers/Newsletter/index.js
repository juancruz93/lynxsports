/*
 *
 * Newsletter
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Newsletter extends React.PureComponent {
  render() {
    const {
      email,
      newsletterChange,
      subscribeToNewsletter,
      formErrors
    } = this.props;

    const SubscribeButton = (
      <Button type='submit' variant='primary' text='Subscribe' />
    );

    const handleSubmit = event => {
      event.preventDefault();
      subscribeToNewsletter();
    };

    return (
      <div className='newsletter-form'>
        <p>Suscríbete a nuestro boletín</p>
        <form onSubmit={handleSubmit}>
          <div className='subscribe'>
            <Input
              type={'text'}
              error={formErrors['email']}
              name={'email'}
              placeholder={'Por favor introduzca su correo electrónico'}
              value={email}
              onInputChange={(name, value) => {
                newsletterChange(name, value);
              }}
              inlineElement={SubscribeButton}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.newsletter.email,
    formErrors: state.newsletter.formErrors
  };
};

export default connect(mapStateToProps, actions)(Newsletter);
