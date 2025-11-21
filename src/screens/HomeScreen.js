// src/screens/HomeScreen.js
/**
 * Home screen for the portfolio app.
 * Displays user info and a button to navigate to Projects screen.
 */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/button';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/profile.png')}
                style={styles.profilePic}
                accessibilityLabel="Profile picture"
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.bio}>Aspiring full-stack developer passionate about React Native.</Text>
            <Button
                title="View My Projects"
                onPress={() => navigation.navigate('Projects')}
            />
            <Button
                title="Contact Me"
                onPress={() => navigation.navigate('Contact')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 15,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
        color: '#555',
    },
});
