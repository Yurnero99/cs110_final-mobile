import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

export default
class Homepage extends Component {
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.changeScene = this.changeScene.bind(this);
    this.state = {count: 0}
  }

  clickHandler() {
    this.setState({count: this.state.count+1});
  }

  changeScene() {
    this.props.changeScene();
  }

  render() {
    return (
      <View style={this.props.styles.container}>
        <Text style={this.props.styles.welcome}>
          Welcome to Gesture!!
        </Text>
        <Text style={this.props.styles.instructions}>
          Here we will have an amazing app!!!
        </Text>
        <View style={this.props.styles.buttons}>
          <Button
            onPress={this.clickHandler}
            title={`Ok! Count is ${this.state.count}`}
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
          <Button
            onPress={this.changeScene}
            title='This looks great!'
            accessibilityLabel="Great!!"
          />
        </View>
      </View>
    );
  }
}
