import React from 'react'
import {Text, PanResponder, Animated, Dimensions} from 'react-native'
import {ScreenOrientation, AppLoading} from 'expo'
import {BackgroundFeel} from '../component/BackgroundFeel'
import {Shape} from './Shape'
import {random} from 'lodash'

export default class Index extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY()   //Step 1
    }
    this.shapePosition = this.getPosition()
    this.shapeBackgroundPosition = this.getPosition(true)
    this.panResponder = PanResponder.create({    //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { //Step 3
        dx: this.state.pan.x,
        dy: this.state.pan.y
      }]),
      onPanResponderRelease: (e, gesture) => {

        // console.log(e, 'e')
        console.log(gesture, 'gesture')

        Animated.spring(
          this.state.pan,
          {toValue: {x: 0, y: 0}}
        ).start()
      } //Step 4
    })
  }

  async componentDidMount() {
    await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
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

    const shape = 'circle'
    const panHandlers = this.panResponder.panHandlers
    const layout = this.state.pan.getLayout()

    return (
      <BackgroundFeel>
        <Shape isBackground shape={shape} {...this.shapeBackgroundPosition}/>

        <Animated.View  {...panHandlers}
                        style={[layout]}>
          <Shape shape={shape} {...this.shapePosition}/>
        </Animated.View>

      </BackgroundFeel>
    )
  }

}
