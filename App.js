import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Eggs'},
    {id: 4, text: 'Bacon'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => (item.id = !id));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
