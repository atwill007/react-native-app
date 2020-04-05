// import React, {Component} from 'react';
// import {StackNavigator, TabBarBottom, createBottomTabNavigator} from "react-navigation";

// import MovieScreen from './Movie/MovieScreen';
// import ProfileScreen from './profile/ProfileScreen';

// import TabBarItem from '../../widget/TabBarItem';

// export default class MyTabNavigator extends Component {
//     render() {
//         return (
//             <Navigator/>
//         );
//     }
// }

// const TabRouteConfigs = {
//     Movie: {
//         screen: MovieScreen,
//         navigationOptions: ({navigation}) => ({
//             tabBarLabel: '首页',
//             tabBarIcon: ({focused, tintColor}) => (
//                 <TabBarItem
//                     tintColor={tintColor}
//                     focused={focused}
//                     normalImage={require('../img/tabBar/tabbar_homepage.png')}
//                     selectedImage={require('../img/tabBar/tabbar_homepage_selected.png')}
//                 />
//             ),
//         }),
//     },
//     Profile: {
//         screen: ProfileScreen,
//         navigationOptions: {
//             tabBarLabel: '附近',
//             tabBarIcon: ({focused, tintColor}) => (
//                 <TabBarItem
//                     tintColor={tintColor}
//                     focused={focused}
//                     normalImage={require('../img/tabBar/tabbar_mine.png')}
//                     selectedImage={require('../img/tabBar/tabbar_mine_selected.png')}
//                 />
//             ),
//         },
//     }
// };
// const TabNavigatorConfigs = {
//     initialRouteName: 'Home',
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     lazy: true,
// };

// console.log('>>>TabNavigator: ', typeof TabNavigator)
// const Tab = createBottomTabNavigator(TabRouteConfigs);
// const StackRouteConfigs = {
//     Tab: {
//         screen: Tab,
//     }
// };
// const StackNavigatorConfigs = {
//     initialRouteName: 'Tab',
//     navigationOptions: {
//         title: '标题',
//         headerStyle: {backgroundColor: '#5da8ff'},
//         headerTitleStyle: {color: '#333333'},
//     }
// };
// const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
