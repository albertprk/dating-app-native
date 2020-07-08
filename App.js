import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, Image } from 'react-native';

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
          <View style={styles.continueButton}><Button color="white" title="CONTINUE" /></View>
        </View>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <View style={styles.screenHeader}>
          <View style={styles.back}><Text style={styles.backButton}>{"<"}</Text></View>
          <View style={styles.skip}><Text style={styles.skipButton}>SKIP</Text></View>
        </View>
    );
  }
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
            <Image style={styles.check} source={require("./check.png")} />
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
  },
  backButton: {
    fontSize: 25,
    fontWeight: "bold",
    color: "lightgray",
    marginTop: -5,
  },
  skipButton: {
    fontSize: 18,
    color: 'lightgray',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  skip: {
    width: "15%",
    marginLeft: "70%",
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
    marginBottom: 30,
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
  check: {
    marginTop: 8,
    marginLeft: "30%",
    height: 18,
    width: 18,
  },
  continueButton: {
    backgroundColor: "#00b87e",
    paddingTop: 3,
    fontSize: 15,
    fontWeight: "700",
    width: "65%",
    height: 45,
    borderRadius: 28,
  }
});