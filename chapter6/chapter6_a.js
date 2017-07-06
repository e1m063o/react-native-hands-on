import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

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
    this.state = {
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
    this.setState((prevState) => {
      let items = prevState.items.concat();
      items.push(content);
      return { items: items }
    })
  }

  removeItem (key) {
    this.setState((prevState) => {
      let items = prevState.items.concat();
      items.splice(key, 1);
      return { items: items }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <InputField onPressButton={(content) => {this.addItem(content)}} />
        {
          this.state.items.map((item, i) => (
            <ToDoItem
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
    this.state = {text: ''}
  }

  saveAndClear () {
    this.props.onPressButton(this.state.text);
    this.setState({text: ''});
  }

  render () {
    return (
      <View style={styles.inputField}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.textInput}
          onEndEditing={() => this.saveAndClear()}
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
        <TouchableHighlight onPress={() => { this.props.onPressItem(this.props.index) }}>
          <Text style={styles.toDoItemText}>
            {this.props.content}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
