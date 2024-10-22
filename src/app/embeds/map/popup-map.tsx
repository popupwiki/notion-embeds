'use client';

import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';

const PopupMap = () => {
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.542021, 127.052463)}
      defaultZoom={15}
    >
      <Marker defaultPosition={new navermaps.LatLng(37.542021, 127.052463)} />
    </NaverMap>
  );
};

export default PopupMap;
