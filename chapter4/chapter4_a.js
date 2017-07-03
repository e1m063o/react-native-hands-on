import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { content: "テスト" };
  }
  render() {
    return (
      <View style={styles.container}>
        <MyComponent content={this.state.content} />
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
