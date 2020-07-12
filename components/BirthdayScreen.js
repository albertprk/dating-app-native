import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class App extends Component {
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
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                    />
                    <TextInput
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                    />
                    <TextInput
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                    />
                    <TextInput
                        maxLength={1}
                        placeholder="Y"
                        style={styles.birthdayInputField}
                    />
                    <Text style={styles.birthdayEntrySeparator}>/</Text>
                    <TextInput
                        maxLength={1}
                        placeholder="M"
                        style={styles.birthdayInputField}
                    />
                    <TextInput
                        maxLength={1}
                        placeholder="M"
                        style={styles.birthdayInputField}
                    />
                    <Text style={styles.birthdayEntrySeparator}>/</Text>
                    <TextInput
                        maxLength={1}
                        placeholder="D"
                        style={styles.birthdayInputField}
                    />
                    <TextInput
                        maxLength={1}
                        placeholder="D"
                        style={styles.birthdayInputField}
                    />
                </View>
                <Text style={styles.subText}>
                    Your age will be public
                </Text>
            </View>
        );
    }
}

export default App;

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