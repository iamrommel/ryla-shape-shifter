import React from 'react'
import {Text} from 'react-native'
import {ScreenOrientation} from 'expo'
import {BackgroundFeel} from '../component/BackgroundFeel'

export default class Index extends React.Component {

  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  render() {
    return (
      <BackgroundFeel>
        <Text>Inside</Text>
      </BackgroundFeel>
    )
  }

}
