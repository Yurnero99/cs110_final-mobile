import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native';
import Homepage from './lib/Homepage';
import Decks from './lib/Decks';

class Test extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Main Menu', index: 1},
      {title: 'Game Deck', index: 2},
      {title: 'End Scene', index: 3}
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if(route.index === 0)
            return <Homepage styles={styles} changeScene={() => navigator.push(routes[1])} />
          else
            return <Decks />
          }
        }
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

AppRegistry.registerComponent('Test', () => Test);
