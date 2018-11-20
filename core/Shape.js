import React from 'react'
import {Image} from 'react-native'
import {shapeNames} from './shapeNames'

export class Shape extends React.Component {

  state = {img: null, left: 0, top: 100}


  componentDidMount() {
    let {shape = 'circle', isBackground = false} = this.props


    let img
    img = isBackground ? shapeNames[shape].bg : shapeNames[shape].main
    this.setState({img})
  }

  render() {
    const {img,} = this.state
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
