/*

# ゴール

MyComponent という自作のコンポーネントを作成し、Appコンポーネントに挿入する。
iOSデバイスの画面上に、Chapter 2, Finished! と表示されれば完成。

# 手順

1. MyComponent という class を作る
2. <Text>Chapter 2, Finished!</Text>
   を return するような render() メソッドを実装する
3. Appコンポーネントの render() メソッドを編集し、
   <View></View>の内側にMyComponent を挿入する

*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
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
