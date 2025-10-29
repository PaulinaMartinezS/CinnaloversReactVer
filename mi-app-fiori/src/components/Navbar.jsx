import React from 'react';
import { Shellbar } from 'fundamental-react';

function Navbar() {
  return (
    <Shellbar
      logoSAP
      productTitle="Mi App Fiori"
      user={{ initials: 'PM' }}
      profile={{
        menu: [
          { name: 'Perfil', callback: () => alert('Perfil') },
          { name: 'Salir', callback: () => alert('Salir') }
        ]
      }}
    />
  );
}

export default Navbar;
