import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screen/homePage';
import MainContainer from './src/navigation/mainContainer';
import DetailPage from './src/subScreen/subHome/detailPage';
import CatatanAlat from './src/subScreen/subPinjaman/catatamAlat';
import PinjamTotal from './src/subScreen/subHome/pinjamTotal';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen name="DetailPage" component={DetailPage} />
          <Stack.Screen name="CatatanAlat" component={CatatanAlat} />
          <Stack.Screen name="PinjamTotal" component={PinjamTotal} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;