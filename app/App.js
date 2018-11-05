/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MainScreen from './screens/mainScreen/MainScreen';
import{View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View>
        <MainScreen />
      </View>

    );
  }
}

