import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Post from './src/components/post/index'


export default function App() {
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Post/>
    </View>
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
