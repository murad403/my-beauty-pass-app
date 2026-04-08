import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import BookingsScreen from '../screens/BookingsScreen';
import CartScreen from '../screens/CartScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';



const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Bookings' component={BookingsScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Notifications' component={NotificationsScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}



export default AppNavigation
