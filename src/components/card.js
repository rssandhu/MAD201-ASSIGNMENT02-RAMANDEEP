// src/components/Card.js
/**
 * Reusable card component for displaying project info.
 * @param {string} title - Project title
 * @param {string} description - Project description
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.learnMoreButton} disabled={true}>
        <Text style={styles.learnMoreText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E1F5FE',
    width: '45%',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
    color: '#333',
  },
  learnMoreButton: {
    backgroundColor: '#0288D1',
    paddingVertical: 6,
    borderRadius: 5,
  },
  learnMoreText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
