import React from 'react'
import {
    View, Text, Button, StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Junior Developer
                </Text>
                <Text style={styles.welcome}>
                    React | JavaScript | HTML | CSS | Express | MongoDB | React Native
                </Text>
            </View>
            <Button title="Go to Projects" onPress={() => navigation.navigate('Details')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    welcome: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
    }
}); 