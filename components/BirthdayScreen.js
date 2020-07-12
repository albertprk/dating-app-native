import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class BirthdayScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>My birthday is</Text>
                <View style={styles.birthdayInputContainer}>
                    <TextInput
                        ref={refOne => this.refOne = refOne}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refTwo.focus()}
                    />
                    <TextInput
                        ref={refTwo => this.refTwo = refTwo}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refThree.focus()}
                    />
                    <TextInput
                        ref={refThree => this.refThree = refThree}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refFour.focus()}
                    />
                    <TextInput
                        ref={refFour => this.refFour = refFour}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refFive.focus()}
                    />
                    <Text style={styles.birthdayEntrySeparator}>/</Text>
                    <TextInput
                        ref={refFive => this.refFive = refFive}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="M"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refSix.focus()}
                    />
                    <TextInput
                        ref={refSix => this.refSix = refSix}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="M"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refSeven.focus()}
                    />
                    <Text style={styles.birthdayEntrySeparator}>/</Text>
                    <TextInput
                        ref={refSeven => this.refSeven = refSeven}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="D"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refEight.focus()}
                    />
                    <TextInput
                        ref={refEight => this.refEight = refEight}
                        keyboardType="numeric"
                        maxLength={1}
                        placeholder="D"
                        style={styles.birthdayInputField}
                        clearTextOnFocus={true}
                        onChangeText={() => this.refEight.focus()}
                    />
                </View>
                <Text style={styles.subText}>Your age will be public</Text>
            </View>
        );
    }
}

export default BirthdayScreen;

const NumericTextInputField = (props) => {
    return (
        <TextInput
            keyboardType="numeric"
            maxLength={1}
            placeholder={props.placeholder}
            style={styles.birthdayInputField}
            onChangeText={() => this.refTwo.focus()}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingLeft: '15%',
    },
    mainText: {
        fontSize: 45,
        fontWeight: '500',
        width: 220,
        marginTop: 140,
    },
    birthdayInputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    birthdayInputField: {
        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgrey',
        fontSize: 15,
        fontWeight: '500',
        color: 'grey',
        marginTop: 30,
        width: 25,
        textAlign: 'center',
        marginRight: 4,
    },
    birthdayEntrySeparator: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 8,
        fontSize: 15,
        color: 'grey',
    },
    subText: {
        fontSize: 15,
        color: 'grey',
        marginTop: 40,
        width: 250,
    },
});