import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

// Screens
import HomePage from '../screen/homePage';
import PengembalianPage from '../screen/pengembalianPage';
import PinjamanPage from '../screen/pinjamanPage';
import ProfilPage from '../screen/profilPage';



const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: '#151D3B',
                headerShown: false,
                tabBarStyle: { position: 'absolute' },
                tabBarStyle: { height: 70, backgroundColor: '#ECECEC', },
            }}

        >

            <Tab.Screen
                name="Katalog"
                component={HomePage}
                options={{
                    tabBarIcon: () => (
                        <Icon name='home' size={30} />
                    )
                }} />
            <Tab.Screen
                name="Pinjaman"
                component={PinjamanPage}
                options={{
                    tabBarIcon: () => (
                        <Icon name='move-to-inbox' size={30} />
                    )
                }} />
            <Tab.Screen
                name="Pengembalian"
                component={PengembalianPage}
                options={{
                    tabBarIcon: () => (
                        <Icon name='assignment-return' size={30} />
                    )
                }} />
            <Tab.Screen
                name="Profil"
                component={ProfilPage}
                options={{
                    tabBarIcon: () => (
                        <Icon name='account-circle' size={30} />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default MainContainer;