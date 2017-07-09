/*

# ゴール

Textコンポーネントを使って、テキストを表示する。
iOSデバイスの画面上に、Chapter 1, Finished! と表示されれば完成。

# 手順

1. react-native パッケージから、Textコンポーネントを import する
2. Appコンポーネントのrender()内（<View></View>の内側）に、
   <Text>Chapter 1, Finished!</Text>
   と記述し、Textコンポーネントを挿入する

*/

import React, { Component } from 'react';
/* TODO: 1. Textコンポーネントを読み込む */
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 2. Textコンポーネントを挿入する */}
        <Text>Chapter 1, Finished!</Text>
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
    fontSize: 20,
  }
});
