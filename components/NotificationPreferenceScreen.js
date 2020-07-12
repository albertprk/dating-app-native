import React from "react";
import {StyleSheet, Text, View} from "react-native";

function NotificationPreferenceScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.imagePlaceholder}>
                    Image Placeholder
                </Text>
                <Text style={styles.mainText}>
                    Keep me posted
                </Text>
                <Text style={styles.subText}>
                    Find out when you get a match or message
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePlaceholder: {
        textAlign: 'center',
        marginBottom: 50,
    },
    mainText: {
        fontSize: 33,
        fontWeight: '500',
        textAlign: 'center',
    },
    subText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
        marginTop: 10,
        width: 250,
    }
});

export default NotificationPreferenceScreen;
