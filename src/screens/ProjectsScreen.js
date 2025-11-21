// src/screens/ProjectsScreen.js
/**
 * Projects screen for the portfolio app.
 * Displays a scrollable list of project cards.
 */
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from '../components/card';

export default function ProjectsScreen() {
  const projects = [
    { id: '1', title: 'Weather App', description: 'Displays current weather using an API' },
    { id: '2', title: 'ToDo List', description: 'Task tracker with local storage' },
    { id: '3', title: 'Crypto Tracker', description: 'Realtime cryptocurrency prices' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {projects.map(project => (
          <Card 
            key={project.id} 
            title={project.title} 
            description={project.description} 
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
