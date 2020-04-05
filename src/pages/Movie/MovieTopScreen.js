import React, {Component} from 'react';
import {Button} from 'react-native'
import MovieList from '../../components/MovieList'

class MovieTopScreen extends Component {
  // static navigationOptions = {
  //   title: 'Movies Top',
  // };

  render() {
    const {navigation, route} = this.props
    const {navigate, push} = navigation;
    console.log('>>>route: ', route)
    return (
      <>
        <Button
          title="push MovieTop"
          onPress={() => {
            push('MovieTop', {name: 'Movie name'});
          }}></Button>
        <Button
          title="navigate Profile"
          onPress={() => navigate('Profile')}
        />

        <MovieList/>
      </>
    );
  }
}

export default MovieTopScreen;
