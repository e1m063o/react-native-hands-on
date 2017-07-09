/*

# ゴール

画面上のボタンが押された場合に、Appコンポーネントの状態を書き換える処理を記述する。
iOSデバイスの画面で、ボタンを押すごとに表示されている数値が +1 されれば完成。

# 手順

1. ButtonコンポーネントのonPressプロパティを編集し、
   ボタンが押された際にthis.handlePressButton() が実行されるようにする
2. handlePressButton() 内を編集し、this.setState((prevState) => {...}) が実行されるようにする
3. this.setStateの引数である (prevState) => { } が { content: prevState.content + 1 } をreturnするようにする

*/

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor() {
    super();
    this.state = { content: 0 };
  }

  /* ボタンが押された時に実行するメソッド */
  handlePressButton() {
    /* TODO: 2. this.setState((prevState) => {}) を記述する */
    /* TODO: 3. (prevState) => {} が { content: prevState.content + 1 } を return するようにする */
    this.setState((prevState) => {
      return { content: prevState.content + 1 };
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MyComponent content={this.state.content} />
        {/* TODO: 1. this.handlePressButton() を実行する処理を記述する */}
        <Button
          onPress={() => { this.handlePressButton() }}
          title="このボタンを押すと+1"
        />
      </View>
    );
  }
}

class MyComponent extends Component {
  render() {
    return (
      <Text style={styles.countArea}>
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
  countArea: {
    fontSize: 30,
  },
});
