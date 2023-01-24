/* A biblioteca ajuda você a autenticar usuários biometricamente 
 nativamente em dispositivos iOS e Android. Para iOS LocalAuthentication 
 Framework é usado, e para android: androidx.biometric:biometricframework 
 BiometricPrompt, BiometricManager) */

/* https://github.com/bebnev/react-native-local-authentication */


import React from 'react';
import { Alert } from 'react-native';
import LocalAuthentication from 'rn-local-authentication';

class MyComponent extends React.Component {
    componentDidMount() {
        LocalAuthentication.authenticateAsync({
            reason: "Please, authenticate!"
        }).then(response => {
            if (response.success) {
                Alert.alert("Authenticated successfully!");
            } else {
                Alert.alert("Something went wrong");
            }
        })
    }

    /* render() {
        return (<AnotherComponent />);
    } */
}






/* Exemplo de código com Expo

import {
    hasHardwareAsync,
    isEnrolledAsync,
    authenticateAsync,
  } from "expo-local-authentication";
  
  const biometricAuth = async () => {
    const compatible = await hasHardwareAsync();
  
    if (!compatible) {
      throw "Este smartphone não possui reconhecimento por biometria ou reconhecimento facial";
    }
    const enrolled = await isEnrolledAsync();
    if (!enrolled) {
      throw "A autenticação por biometria está desativada";
    }
    const result = await authenticateAsync();
    if (!result.success) {
      throw `Falha na autenticação - ${result.error}`;
    } else {
      return true;
    }
  };
  
  export default biometricAuth; */
  