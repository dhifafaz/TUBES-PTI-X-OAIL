
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screen/homePage';
import MainContainer from './src/navigation/mainContainer';
import DetailPage from './src/subScreen/subHome/detailPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

