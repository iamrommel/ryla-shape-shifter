import React from 'react'
import {StyleSheet, StatusBar, View} from 'react-native'
import Core from './core'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <Core/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
