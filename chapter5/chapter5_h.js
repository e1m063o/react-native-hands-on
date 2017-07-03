import React, { Component } from 'react';
import { Text, View, StyleSheet, ... } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { content: 0 };
  }
  handlePressButton() {
    // TODO: 1. this.setState() を実装する。
    //       prevStateが直前のStateで、returnした値が新しいStateになる
    this.setState((prevState) => {
      return { content: ... };
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <MyComponent content={this.state.content} />
        { /* TODO: 2. ButtonComponentを設置し、ボタンが押されたら handlePressButton() を呼び出す */}
        <Button
          onPress={...}
          title="+"
        />
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
