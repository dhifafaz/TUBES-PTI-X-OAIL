import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/navigation';
import DetailPage from './src/subScreen/subHome/detailPage';
import DetailRiwayatPage from './src/subScreen/subRiwayat/detailRiwayat';
import ScenePage from './src/subScreen/sceneBar/saceneBar';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="DetailRiwayatPage" component={DetailRiwayatPage} /> */}
        <Stack.Screen name="ScenePage" component={ScenePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;