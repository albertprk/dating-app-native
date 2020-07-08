import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
          <Header />
          <View style={styles.orientationForm}>
            <Text style={styles.headerText}>My sexual {'\n'}orientation is</Text>
            <Text style={styles.orientationInstruction}>Choose one</Text>
            <OrientationOption option="Straight" />
            <OrientationOption option="Gay" />
            <OrientationOption option="Lesbian" />
            <OrientationOption option="Bisexual" />
            <OrientationOption option="Asexual" />
          </View>
        </View>
    );
  }
}

function Header() {
  return (
      <View style={styles.screenHeader}>
        <Text style={styles.skipButton}>SKIP</Text>
      </View>
  );
}

class OrientationOption extends Component {
  constructor() {
    super();
    this.state = {
      selected: "false",
    }
  }

  handlePress = () => {
    if (this.state.selected === "false") {
      this.setState({
        selected: "true"
      })
    } else {
      this.setState({
        selected: "false"
      })
    }
  }

  render() {
    if (this.state.selected === "true") {
      return (
          <View style={styles.checkForm}>
            <View style={styles.orientationButton}>
              <Button color="black" title={this.props.option} onPress={this.handlePress} />
            </View>
            <View style={styles.checkMark}>
            </View>
          </View>
      )
    } else {
      return (
          <View style={styles.checkForm}>
            <View style={styles.orientationButton}>
              <Button color="black" title={this.props.option} onPress={this.handlePress} />
            </View>
          </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'none',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  screenHeader: {
    marginTop: 35,
    flexDirection: 'row',
    marginBottom: 60,
    textAlign: 'right',
  },
  skipButton: {
    fontSize: 18,
    color: 'lightgray',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  orientationInstruction: {
    fontSize: 12,
    marginTop: 20,
    marginLeft: 2,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'grey',
  },
  orientationForm: {
    width: '70%',
  },
  checkForm: {
    alignItems: 'left',
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 10,
  },
  orientationButton: {
    background: 'white',
    alignItems: 'left',
    width: '60%',
  },
});