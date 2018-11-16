import React from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import RTPIScreen from './screens/RTPIScreen';
import MapScreen from './screens/MapScreen';
import NewsScreen from './screens/NewsScreen';

const Home = ({ navigation={navigation} }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <HomeScreen />
  </SafeAreaView>
);

const RTPI = ({ navigation={navigation} }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <RTPIScreen />
  </SafeAreaView>
);

const Maps = ({ navigation={navigation} }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <MapScreen />
  </SafeAreaView>
);

const News = ({ navigation={navigation} }) => (
  <SafeAreaView forceInset={{ horizontal: 'always', top: 'always' }}>
    <NewsScreen />
  </SafeAreaView>
);

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

RTPI.navigationOptions = {
  tabBarLabel: 'RTPI',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-bus' : 'ios-bus-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

Map.navigationOptions = {
  tabBarLabel: 'Maps',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-map' : 'ios-map-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

News.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-paper' : 'ios-paper-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const AppNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '',
    },
    RTPI: {
      screen: RTPIScreen,
      path: 'rtpi',
    },
    Maps: {
      screen: MapScreen,
      path: 'maps',
    },
    News: {
      screen: NewsScreen,
      path: 'news',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      style: {
        backgroundColor: Platform.OS === 'android' ? 'green' : 'white',
      },
      labelStyle: {
        fontSize: Platform.OS === 'android' ? 16 : 12,
      },
      showIcons: true
    },
  }
);

export default AppNavigator;
