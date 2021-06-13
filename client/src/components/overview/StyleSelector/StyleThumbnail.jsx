import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StylePhoto = styled.img`
  max-height: 100%;
  max-width: 100%;
  border-radius: 50%;
  height: 55px;
  width: 55px;
  border: 1.5px solid black;
  margin: 8px;
`;

const CheckBox = styled.img`
  border-radius: 50%;
  border: 1.5px solid black;
  background-color: white;
  vertical-align: text-top;
  width: 8px;
  height: 8px;
  padding: 2%;
`;

function StyleThumbnail({ style, current }) {
const { name, photos } = style;
const { thumbnail_url } = photos[0];

  return (
    <div>
      <StylePhoto src={thumbnail_url} alt={name} />
      <CheckBox src = "./assets/check-mark-black-outline.png"></CheckBox>
    </div>
  );
}

export default StyleThumbnail;

StyleThumbnail.propTypes = {
  style: PropTypes.instanceOf(Object),
  current: PropTypes.number,
};

StyleThumbnail.defaultProps = {
  style: {},
  current: 0,
}