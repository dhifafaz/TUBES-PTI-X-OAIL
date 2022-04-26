import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import KatalogPage from '../screen/katalog';
import PeminjamanPage from '../screen/peminjam';
import RiwayatPage from '../screen/riwayat';
import ProfilPage from '../screen/profil';


const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#151D3B',
                headerShown: false,
                tabBarStyle: { 
                    height: 70, 
                    backgroundColor: '#ECECEC', 
                    position: 'absolute',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30, 
                    },
                tabBarLabelStyle: {
                    
                }
            }}

        >

            <Tab.Screen
                name="Katalog"
                component={KatalogPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Pinjaman"
                component={PeminjamanPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="inbox-arrow-down" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Riwayat"
                component={RiwayatPage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="text-box-search" color={color} size={30} />
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