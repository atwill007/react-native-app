import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {getUserInfo} from '../../common/utils/auth';

class ProfileScreen extends Component {
  static customName = 'Profile';

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: null,
    };
  }

  async componentWillMount() {
    const userInfo = await getUserInfo();
    if (userInfo)
      this.setState({
        isLogin: true,
        userInfo,
      });
  }

  render() {
    const {goBack, push} = this.props.navigation;
    const {state} = this;
    return (
      <View style={{alignItems: 'center'}}>
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
        {state.isLogin ? (
          <Text>userInfo: {JSON.stringify(state.userInfo)}</Text>
        ) : (
          <Text>未登录</Text>
        )}
      </View>
    );
  }
}

export default ProfileScreen;
