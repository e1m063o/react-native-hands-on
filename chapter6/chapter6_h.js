import React, { Component } from 'react';
/* Component を読み込む */
import { StyleSheet, View, Text, FIXME, FIXME } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  toDoItem: {
    height: 40,
  },
  toDoItemText: {
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 20,
  }
});

export default class App extends Component {
  constructor () {
    super();
    /* Component に状態を持たせる */
    this.FIXME = {
      items: [
        '一つ一つの行がTODOになっています',
        'タップすることで完了＝リストから消えます',
        '画面上のエリアに文字を入力して',
        '入力が完了すると',
        'リストの最下部にTODOが追加されます',
      ]
    };
  }

  addItem (content) {
    /* Component の状態を変化させる */
    this.FIXME((prevState) => {
      let items = prevState.items.concat();
      items.push(content);
      return { items: items }
    })
  }

  removeItem (key) {
    /* Component の状態を変化させる */
    this.FIXME((prevState) => {
      let items = prevState.items.concat();
      items.splice(key, 1);
      return { items: items }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        {/* Component を呼び出す */}
        <FIXME onPressButton={(content) => {this.addItem(content)}} />
        {
          this.state.items.map((item, i) => (
            /* Component を呼び出す */
            <FIXME
              key={i}
              index={i}
              content={item}
              onPressItem={(i) => { this.removeItem(i) }}
            />
          ))
        }
      </View>
    )
  }
}

class InputField extends Component {
  constructor (props) {
    super(props);
    /* Component に状態を持たせる */
    this.FIXME = {text: ''}
  }

  saveAndClear () {
    this.FIXME.onPressButton(this.FIXME.text);
    /* Component に状態を持たせる */
    this.FIXME({text: ''});
  }

  render () {
    return (
      <View style={styles.inputField}>
        {/* 親Component から値を渡す（渡された値を使う） */}
        <TextInput
          onChangeText={(text) => this.setState({text: text})}
          value={this.FIXME.text}
          style={styles.textInput}
          onEndEditing={() => this.FIXME.onPressItem()}
          placeholder='ここにテキストを入力してください'
        />
      </View>
    )
  }
}

class ToDoItem extends Component {
  render () {
    return (
      <View style={styles.toDoItem}>
        {/* 親Component から値を渡す（渡された値を使う） */}
        <TouchableHighlight onPress={() => { this.FIXME.onPressItem(this.FIXME.index) }}>
          <Text style={styles.toDoItemText}>
            {/* 親Component から値を渡す（渡された値を使う） */}
            {this.FIXME.content}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
