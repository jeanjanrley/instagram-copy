import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
import Post from './src/components/post/index'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
    </SafeAreaView>
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
