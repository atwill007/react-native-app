import React, {Component} from 'react';
import {Button, Text} from 'react-native';

class ProfileScreen extends Component {
  static customName = 'Profile'

  render() {
    const {goBack, push} = this.props.navigation;
    return (
      <>
        <Button
          title="返回"
          onPress={() => {
            goBack();
          }}></Button>
        <Button
          title="push MovieTop"
          onPress={() => {
            push('MovieTop', {msg: 'from profile', user: null});
          }}></Button>
        <Button
          title="push Init"
          onPress={() => {
            push('Init', {msg: 'from profile', user: null});
          }}></Button>
        <Button
          title="push Demo"
          onPress={() => {
            push('Demo', {msg: 'from profile', user: null});
          }}></Button>

        <Text>Profile Page</Text>
      </>
    );
  }
}

export default ProfileScreen;
