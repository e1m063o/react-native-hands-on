import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { content: 0 };
  }
  handlePressButton() {
    // TODO: 2. this.setState() を実装し、this.state.content の数値に +1 する
  }
  render() {
    return (
      <View style={styles.container}>
        <MyComponent content={this.state.content} />
        {/* TODO: 1. Button Componentを設置し、ボタンが押されたら this.handlePressButton() を呼び出す */}
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
  },
});
