import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Post from './src/components/post/index'


export default function App() {
  return (
    <VSiew style={styles.container}>
      <Post/>
      <Post/>
    </VSiew>
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
