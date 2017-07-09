/*

# ゴール

Appコンポーネントに状態を持たせて、その内容をMyComponent内で表示させる。
iOSデバイスの画面上に、Chapter 4, Finished! と表示されれば完成。

# 手順

1. App Component の constructor() 内で、
   this.state に { content: “Chapter 4, Finished!” } を代入する
2. MyComponent を呼び出す際に、
   this.state.content を content プロパティとして渡す

*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    /* TODO: 1. this.state に { content: "Chapter 4, Finished!" } というオブジェクトを代入する */
  }
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 2. Stateに入っている content を MyComponent に渡す */}
        <MyComponent content={} />
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
