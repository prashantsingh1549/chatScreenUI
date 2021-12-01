import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChatScreen from './src/components/ChatScreen';
import Header from './src/components/Header';
import { vh } from './src/components/Dimension';

const App = () => {



  return (
    <View style={styles.mainContainer}>
      <View style={{ height: vh(62) }}>
        <Header />
      </View>
      <View style={{ flex: 5 }}>
        <ChatScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

export default App;
