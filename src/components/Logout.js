import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {clientId} from "../utils/constants";

function Logout(props) {
  const {onLogoutclbk} = props;
  const onSuccess = () => {
      console.log('Logout made successfully');
      onLogoutclbk();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
