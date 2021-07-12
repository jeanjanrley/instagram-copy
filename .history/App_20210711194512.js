import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Scroll } from 'react-native';
import Post from './src/components/post/index'


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Post/>
      <Post/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
