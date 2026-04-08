import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigation/RootNavigation'



const App = () => {
  const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0
  return (
    <View style={styles.container} >
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <View style={[styles.statusBarArea, { height: statusBarHeight }]} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ff00ff"
  },
  statusBarArea: {
    backgroundColor: "#f0ffff"
  }
})

export default App
