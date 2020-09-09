import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";

import Home from "./components/Explore/Home";

class Explore extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar hidden />
                <Home></Home>
            </SafeAreaView>
        );
    }
}

export default Explore;