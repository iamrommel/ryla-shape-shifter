import React from 'react'
import {ImageBackground, View, Text} from 'react-native'
import Unsplash from 'unsplash-js/native'
import app from '../app.json'
import {AppLoading} from 'expo'

export class BackgroundFeel extends React.Component {

  constructor(props) {
    super(props)
    this.unsplash = new Unsplash({
      applicationId: app.settings.unsplash.accessKey,
      secret: app.settings.unsplash.secretKey

    })

  }

  state = {bg: null}

  async componentDidMount() {

    //get random image from splash every 2minutes
    const toJson = await this.unsplash.photos.getRandomPhoto({query: 'cats'})
    const photo = await toJson.json()
    const bg = {uri: photo.urls.regular}
    const photoUserName = photo.user.name

    this.setState({bg, photoUserName})

  }

  render() {
    const {bg, photoUserName} = this.state
    if (!bg) return <AppLoading/>

    return (
      <ImageBackground source={this.state.bg} style={{width: '100%', height: '100%'}}>
        {this.props.children}
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'yellow',
          opacity: 0.3
        }}>
          <Text style={{color: 'white', margin: 10}}>Photo by {photoUserName} on Unsplash</Text>
        </View>
      </ImageBackground>
    )
  }
}
