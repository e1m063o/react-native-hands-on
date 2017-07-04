import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    // TODO: 1. this.state に { content: "Chapter 4, Finished!" } というオブジェクトを代入する
    this.state = ...;
  }
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 2. Stateに入っている content を MyComponent に渡す */}
        <MyComponent content={...} />
      </View>
    );
  }
}

class MyComponent extends Component {
  render() {
    return (
      <Text>
        {this.props.content}
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
