import React, { Component } from 'react';
// TODO: 1. 使いたいReactNativeのComponentを読み込む
import { ..., View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 2. 読み込んだComponentを使う */}
        ...
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
