import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function PhotoChooser() {
    return (
        <View style={styles.container}>
            <View style={styles.photoBubbleRow}>
                <PhotoBubble />
                <PhotoBubble />
                <PhotoBubble />
            </View>
        </View>
    );
}

class PhotoBubble extends Component {
    state = {
        image: null
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    render() {
        if (this.state.image == null) {
            return (
                <View style={styles.photoBubble}>
                    <TouchableHighlight style={styles.defaultBubble} onPress={this._pickImage}>
                        <View style={styles.defaultBubbleAdd}>
                            <Text style={styles.defaultBubbleAddText}>+</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={styles.photoBubble}>
                    <TouchableHighlight onPress={this._pickImage}>
                        <Image source={{uri: this.state.image}} style={styles.imageBubble} />
                    </TouchableHighlight>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoBubbleRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    photoBubble: {
        width: 95,
        height: 95,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        borderRadius: 100,
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultBubble: {
        width: 87,
        height: 87,
        borderRadius: 100,
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultBubbleAdd: {
        width: 31,
        height: 31,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 25,
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultBubbleAddText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 500,
        marginBottom: 6,
    },
    imageBubble: {
        width: 87,
        height: 87,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});