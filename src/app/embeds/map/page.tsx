'use client';

import { Container as MapDiv } from 'react-naver-maps';
import PopupMap from './popup-map';

const MapPage = () => {
  return (
    <MapDiv style={{ width: '100%', height: '600px' }}>
      <PopupMap />
    </MapDiv>
  );
};

export default MapPage;
