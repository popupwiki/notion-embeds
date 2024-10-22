'use client';

import { NavermapsProvider } from 'react-naver-maps';

const MapLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const myNcpClientId = process.env.NEXT_PUBLIC_NCP_CLIENT_ID;
  if (myNcpClientId === undefined) {
    throw new Error('NCP_CLIENT_ID is not defined');
  }
  return (
    <NavermapsProvider ncpClientId={myNcpClientId}>
      {children}
    </NavermapsProvider>
  );
};

export default MapLayout;
