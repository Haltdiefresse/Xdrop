import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

export default class App extends Component {
  state = {
    game: false,
  };
  _game(){
    this.setState({ game: true });
    return(
    <View style={styles.container}>
      <View style={styles.box} />
       <Text>xdrop</Text>
       <StatusBar style="auto" />
    </View>
    )
  }
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000
    }).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        
      
      <Button title="Start" onPress={() => this._game()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
