import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { content: 0 };
  }
  handlePressButton() {
    this.setState((prevState) => {
      return { content: prevState.content + 1 };
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <MyComponent content={this.state.content} />
        <Button
          onPress={() => { this.handlePressButton() }}
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
