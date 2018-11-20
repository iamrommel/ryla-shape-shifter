import React from 'react'
import {Text} from 'react-native'
import {ScreenOrientation, AppLoading} from 'expo'
import {BackgroundFeel} from '../component/BackgroundFeel'
import {Shape} from './Shape'

export default class Index extends React.Component {

  async componentDidMount() {
    await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  render() {

    return (
      <BackgroundFeel>
        <Shape isBackground shape="pentagon"/>
        <Shape shape="pentagon"/>
      </BackgroundFeel>
    )
  }

}
