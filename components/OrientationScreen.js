import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const orientations = [
    'Straight',
    'Gay',
    'Lesbian',
    'Bisexual',
    'Asexual',
]

function OrientationScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.orientationForm}>
                <Text style={styles.headerText}>My sexual {'\n'}orientation is</Text>
                <Text style={styles.orientationInstruction}>Choose one</Text>
                {orientations.map((orientation) => (
                    <OrientationOption key={orientation} option={orientation} />
                ))}
            </View>
            <View style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </View>
        </View>
    )
}

export default OrientationScreen;

function Header() {
    return (
        <View style={styles.screenHeader}>
            <View style={styles.back}>
                <Text style={styles.backButton}>
                    {"<"}
                </Text>
            </View>
            <View style={styles.skip}>
                <Text style={styles.skipButton}>
                    SKIP
                </Text>
            </View>
        </View>
    )
}

class OrientationOption extends Component {
    constructor() {
        super();
        this.state = {
            selected: false,
        }
    }

    _handlePress = () => {
        const { selected } = this.state;
        this.setState(prevState => ({
            selected: !prevState.selected,
        }));
    }

    render() {
        const { option } = this.props;
        const { selected } = this.state;
        return (
            <View style={styles.checkForm}>
                <View style={styles.orientationButton}>
                    <Button
                        color="black"
                        title={option}
                        onPress={this._handlePress}
                    />
                </View>
                {selected ? <Image style={styles.check} source={require("./check.png")} /> : null}
            </View>
        )
    }
}

OrientationOption.propTypes = {
    option: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 3,
        marginLeft: 10,
    },
    orientationButton: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
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
        width: "65%",
        height: 50,
        borderRadius: 28,
    },
    continueButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "700",
        textAlign: 'center',
        lineHeight: 50,
    }
});