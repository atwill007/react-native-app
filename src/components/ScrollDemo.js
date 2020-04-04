import React, {Component} from 'react';
import {ScrollView, Image, Text} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image
          source={{
            uri: 'https://facebook.github.io/react-native/img/favicon.png',
            width: 64,
            height: 64,
          }}
        />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Text style={{fontSize: 96}}>What's the best</Text>
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Text style={{fontSize: 80}}>React Native</Text>
      </ScrollView>
    );
  }
}
