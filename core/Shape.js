import React from 'react'
import {Image} from 'react-native'

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

    //because react-native cannot do dynamic require, we need this

    let img
    img = isBackground ? this.images[shape].bg : this.images[shape].main
    this.setState({img})
  }

  render() {
    const {img, } = this.state
    const {top, left} = this.props

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
