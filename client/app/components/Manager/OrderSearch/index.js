/**
 *
 * OrderSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const OrderSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='order'
        placeholder='Escriba el Pedido ID'
        btnText='Buscar'
        onSearch={props.onSearch}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default OrderSearch;
