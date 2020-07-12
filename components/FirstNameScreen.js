import React, {Component} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";


class FirstNameScreen extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }

    _handleNameChange = (text) => {
        this.setState({
            name: text,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.mainText}>
                        My first name is
                    </Text>
                    <TextInput
                        style={styles.firstNameInputField}
                        onChangeText={text => this._handleNameChange(text)}
                    />
                    <Text style={styles.subText}>
                        This is how your name will appear in the App
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 45,
        fontWeight: '500',
        width: 200,
        marginTop: 140,
    },
    firstNameInputField: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        fontSize: 25,
        fontWeight: '500',
        color: 'grey',
        marginTop: 20,
    },
    subText: {
        fontSize: 15,
        color: 'grey',
        marginTop: 25,
        width: 250,
    }
});

export default FirstNameScreen;
