import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MainTabs' component={AppNavigation}/>
    </Stack.Navigator>
  )
}

export default RootNavigation
