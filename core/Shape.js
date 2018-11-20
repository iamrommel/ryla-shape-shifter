import React from 'react'
import {Text, View, Image, Dimensions} from 'react-native'
import {random} from 'lodash'

export class Shape extends React.Component {

  state = {img: null, left: 0, top: 100}

  //because react-native cannot do dynamic require, we need to declare them all here
  images = {
    circle: {
      main: require('../assets/circle.png'),
      bg: require('../assets/circle-bg.png'),
    },
    pentagon: {
      main: require('../assets/pentagon.png'),
      bg: require('../assets/pentagon-bg.png'),
    },
    square: {
      main: require('../assets/square.png'),
      bg: require('../assets/square-bg.png'),
    }
  }

  componentDidMount() {
    let {shape = 'circle', isBackground = false} = this.props
    const height = Dimensions.get('window').width //this intentional because of landscape orientation
    const width = Dimensions.get('window').height //this intentional because of landscape orientation


    //because react-native cannot do dynamic require, we need this
    let img, top, left

    //setup the image and location if background and normal image
    //the background is almost on the left most, and
    //TODO: when boundaryPosition is 0, the the background image is on the left

    if (isBackground) {
      img = this.images[shape].bg
      top = random(0, height - 150)
      left = random(0, (width / 2) - 150)
    }
    else {
      img = this.images[shape].main
      top = random(0, height - 150,)
      left = random((width / 2), width - 150)
    }

    this.setState({img, top, left})
  }

  render() {
    const {img, top, left} = this.state


    //TODO: better return a loading image here
    if (!img) return null

    return (

      <Image
        style={{backgroundColor: 'transparent', width: 150, height: 150, left, top, position: 'absolute'}}
        source={img}
      />

    )
  }
}
