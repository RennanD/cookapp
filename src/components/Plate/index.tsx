import React from 'react';

import { MotiImage } from 'moti'

import { styles } from './styles';

import plateImg from '../../assets/plate.png';

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{
        opacity: 0,
        rotate: '100deg'
      }}
      animate={{
        opacity: 1,
        rotate: '0deg'
      }}
      transition = {{
        type: 'timing',
        duration: 2000
      }}
    />
  );
}