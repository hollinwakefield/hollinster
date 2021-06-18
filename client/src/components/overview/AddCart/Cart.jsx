import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import AddtoCart from './AddtoCart.jsx';
import StarCart from './StarCart.jsx';

const CartFormat = styled.div`
  display: flex;
  height: 10%;
  margin-bottom: 5%;
  margin-top: 2%;
  width: 100%;
`;

function Cart({ currentStyle }) {
  const { skus } = currentStyle;
  const [currentSize, setCurrentSize] = useState('SELECT SIZE');
  const [showError, setShowError] = useState(false);

  return (
    <div>
      {showError ? <div>Please select size</div> : <div /> }
      <CartFormat>
        <Size skus={skus} useCurrentSize={setCurrentSize} setShowError={setShowError} />
        <Quantity currentSizeObj={skus ? skus[currentSize] : { quantity: 0 }} />
      </CartFormat>
      <CartFormat>
        <AddtoCart currentSize={`${currentSize}`} skus={skus} setShowError={setShowError} />
        <StarCart />
      </CartFormat>
    </div>
  );
}

Cart.propTypes = {
  currentStyle: PropTypes.shape({
    skus: PropTypes.shape({}),
  }),
};

Cart.defaultProps = {
  currentStyle: { skus: {} },
};

export default Cart;
