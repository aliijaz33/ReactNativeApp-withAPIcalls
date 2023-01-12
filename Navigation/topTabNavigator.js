/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MaleUsers from '../Screens/MaleUsers';
import FemaleUsers from '../Screens/FemaleUsers';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: true, tabBarStyle: { backgroundColor: 'rgba(60, 255, 60, 0.8)' }, tabBarInactiveTintColor: 'black' }}>
            {/* <Tab.Screen name="Drawer" component={} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" color={color} size={20} />
                )
            }}
            /> */}
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" color={color} size={20} />
                )
            }}
            />
            <Tab.Screen name="Male Users" component={MaleUsers} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person-outline" color={color} size={20} />
                )
            }} />
            <Tab.Screen name="Female Users" component={FemaleUsers} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person-outline" color={color} size={20} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default TopTabNavigator;
