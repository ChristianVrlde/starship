import React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import StarshipFeedScreen from './src/screens/StarshipFeedScreen';

export default function App() {
    return (
        <View>
            <LoginScreen />
            <StarshipFeedScreen />
        </View>
    );
}