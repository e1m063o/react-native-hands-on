import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 1. MyComponentにcontentプロパティを渡す */}
        <MyComponent ... />
      </View>
    );
  }
}

class MyComponent extends Component {
  render() {
    return (
      <Text>
        {/* TODO: 2. 親のApp Componentから渡されたcontentプロパティを表示する*/}
      </Text>
    )
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
