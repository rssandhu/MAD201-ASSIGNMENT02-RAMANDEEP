/**
 * Displays contact buttons with icons for LinkedIn, GitHub, and Email.
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function ContactScreen() {
  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactRow}>
        <TouchableOpacity onPress={() => openURL('https://linkedin.com/')} style={styles.contactButton}>
          <FontAwesome name="linkedin-square" size={28} color="#0077B5" />
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://github.com/')} style={styles.contactButton}>
          <FontAwesome name="github" size={28} color="#000" />
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactRow}>
        <TouchableOpacity onPress={() => openURL('mailto:abc@gmail.com')} style={styles.contactButton}>
          <MaterialIcons name="email" size={28} color="#D44638" />
          <Text style={styles.link}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    color: '#2196F3',
    marginLeft: 8,
  },
});
