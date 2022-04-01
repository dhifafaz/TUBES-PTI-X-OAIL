import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                tabBarStyle: { height: 70, backgroundColor: '#ECECEC', position: 'absolute' },
            }}

        >

            <Tab.Screen
                name="Katalog"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Pinjaman"
                component={PinjamanPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="inbox-arrow-down" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Pengembalian"
                component={PengembalianPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clipboard-arrow-left" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Profil"
                component={ProfilPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={30} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default MainContainer;