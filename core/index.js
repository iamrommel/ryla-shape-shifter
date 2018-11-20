import React from 'react'
import {PanResponder, Animated, Dimensions} from 'react-native'
import {ScreenOrientation} from 'expo'

import {BackgroundFeel} from '../component/BackgroundFeel'
import {Shape} from './Shape'
import {random} from 'lodash'
import {shapeNames} from './shapeNames'


export default class Index extends React.Component {

  constructor(props) {
    super(props)

    this.between = (x, min, max) => {
      return x >= min && x <= max
    }
    this.shapeNames = Object.keys(shapeNames)
    this.state = {
      pan: new Animated.ValueXY(),
      activeShape: this.shapeNames[1],
      shapePosition: this.getPosition(),
      shapeBackgroundPosition: this.getPosition(true)
    }

    this.panResponder = PanResponder.create({    //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { //Step 3
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {

        //gesture.moveX should be between left and left + 150
        //gesture.moveY should be between top and top + 150
        const {left, top} = this.state.shapeBackgroundPosition
        const {moveX, moveY} = gesture


        const allowance = 130
        if (this.between(moveX, left, left + allowance) && this.between(moveY, top, top + allowance)) {
          //this.reset()
        }
        else {
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start()
        }
      }
    })
  }


  async componentDidMount() {
    await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  reset = () => {

    const shapePosition = this.getPosition()
    const shapeBackgroundPosition = this.getPosition(true)

    let {activeShape} = this.state
    let shapeId = 0, newShape = null
    do {
      shapeId = random(0, this.shapeNames.length - 1)
      newShape = this.shapeNames[shapeId]
    }
    while (activeShape === newShape)
    activeShape = newShape

    this.setState({activeShape, shapePosition, shapeBackgroundPosition})
  }

  getPosition = (isBackground = false) => {

    const height = Dimensions.get('window').width //this intentional because of landscape orientation
    const width = Dimensions.get('window').height //this intentional because of landscape orientation


    //because react-native cannot do dynamic require, we need this
    let top, left

    if (isBackground) {
      top = random(0, height - 150)
      left = random(0, (width / 2) - 150)
    }
    else {
      top = random(0, height - 150,)
      left = random((width / 2), width - 150)
    }

    return {top, left}
  }

  render() {

    const {activeShape, shapePosition, shapeBackgroundPosition} = this.state
    const panHandlers = this.panResponder.panHandlers
    const layout = this.state.pan.getLayout()

    return (
      <BackgroundFeel>
        <Shape isBackground shape={activeShape} {...shapeBackgroundPosition}/>

        <Animated.View  {...panHandlers}
                        style={[layout]}>
          <Shape shape={activeShape} {...shapePosition}/>
        </Animated.View>

      </BackgroundFeel>
    )
  }

}
