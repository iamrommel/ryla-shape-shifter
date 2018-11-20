import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import {ScreenOrientation} from 'expo'
import {random} from 'lodash'

export default class Index extends React.Component {

  constructor() {
    super()
    //get the images
    this.bg1 = require('../assets/bg1.jpg')
    this.bg2 = require('../assets/bg2.jpg')
    this.bg3 = require('../assets/bg3.jpg')
    this.bg4 = require('../assets/bg4.jpg')
  }

  state = {bg: this.bg1}

  componentDidMount() {
    const randomIndex = random(1, 4)
    this.setState({bg: this[`bg${randomIndex}`]})

    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  render() {
    return (
      <View>
        <ImageBackground source={this.state.bg} style={{width: '100%', height: '100%'}}>
          <Text>Inside</Text>
        </ImageBackground>
      </View>
    )
  }

}
