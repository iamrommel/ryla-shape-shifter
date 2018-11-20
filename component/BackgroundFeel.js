import React from 'react'
import {random} from 'lodash'
import {ImageBackground} from 'react-native'

export class BackgroundFeel extends React.Component {

  constructor() {
    super()
    this.bg1 = require('../assets/bg1.jpg')
    this.bg2 = require('../assets/bg2.jpg')
    this.bg3 = require('../assets/bg3.jpg')
    this.bg4 = require('../assets/bg4.jpg')
  }

  state = {bg: this.bg1}

  componentDidMount() {
    const randomIndex = random(1, 4)
    this.setState({bg: this[`bg${randomIndex}`]})

  }

  render() {
    return (
      <ImageBackground source={this.state.bg} style={{width: '100%', height: '100%'}}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
