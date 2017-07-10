/*

# ゴール

MyComponentにcontentプロパティを渡し、MyComponent内でその内容を表示する。
iOSデバイスの画面上に、Chapter 3, Finished! と表示されれば完成。

# 手順

1. AppComponent の render() 内で MyComponent を挿入する際に、
   content=”Chapter 3, Finished!” というプロパティを追加する
2. MyComponent の <Text></Text> の中に、{this.props.content} を記述する

*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TODO: 1. MyComponentにcontentプロパティを渡す */}
        <MyComponent FIXME="FIXME" />
      </View>
    );
  }
}

class MyComponent extends Component {
  render() {
    return (
      <Text>
        {/* TODO: 2. 親のAppコンポーネントから渡されたcontentプロパティを表示する*/}
        {this.FIXME.FIXME}
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
