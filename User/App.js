import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screen/homePage';
import MainContainer from './src/navigation/mainContainer';
import DetailPage from './src/subScreen/subHome/detailPage';
import CatatanAlat from './src/subScreen/subPinjaman/catatamAlat';
import PinjamTotal from './src/subScreen/subHome/pinjamTotal';
import Register from './src/screen/RegisterPage';
import RegisterAfter from './src/screen/RegisterAfter';
import Login from './src/screen/LoginPage';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import tryUpload from './src/screen/tryUpload';

import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {

  auth()
    .signInAnonymously()
    .then(() => {
      console.log('User signed in anonymously');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }

      console.error(error);
    });

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Register" component={Register} /> */}
          {/* <Stack.Screen name="tryUpload" component={tryUpload} /> */}
          <Stack.Screen name="RegisterAfter" component={RegisterAfter} />
          {/* <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen name="DetailPage" component={DetailPage} />
          <Stack.Screen name="CatatanAlat" component={CatatanAlat} />
          <Stack.Screen name="PinjamTotal" component={PinjamTotal} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;