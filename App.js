import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/header';
import uuid from 'react-native-uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v1(), text: 'Milk'},
    {id: uuid.v1(), text: 'Bread'},
    {id: uuid.v1(), text: 'Eggs'},
    {id: uuid.v1(), text: 'Bacon'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}></FlatList>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
