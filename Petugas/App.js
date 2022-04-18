import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/navigation';
import DetailPage from './src/subScreen/subHome/detailPage';
import DetailRiwayatPage from './src/subScreen/subRiwayat/detailRiwayat';
import DetailPeminjaman from './src/subScreen/subDetailPeminjaman/detailPeminjaman';
import DetailPengambilan from './src/subScreen/subDetailPengambilan/detailPengambilan';
import DetailPengembalian from './src/subScreen/subDetailPengembalian/detailPengembalian';




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="DetailRiwayatPage" component={DetailRiwayatPage} />
        <Stack.Screen name="DetailPeminjaman" component={DetailPeminjaman} />
        <Stack.Screen name="DetailPengambilan" component={DetailPengambilan} />
        <Stack.Screen name="DetailPengembalian" component={DetailPengembalian} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;