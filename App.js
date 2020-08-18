import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "AA",
    title: "First Item",
  },
  {
    id: "BB",
    title: "Second Item",
  },
  {
    id: "CC",
    title: "Third Item",
  },
  {
    id: "DD",
    title: "Fourth Item",
  },
  {
    id: "EE",
    title: "Fifth Item",
  },
  {
    id: "FF",
    title: "Sixth Item",
  },
  {
    id: "GG",
    title: "Seventh Item",
  },
  {
    id: "HH",
    title: "Eight Item",
  },
  {
    id: "II",
    title: "Ninth Item",
  },
  {
    id: "JJ",
    title: "Tenth Item",
  },
  {
    id: "KK",
    title: "Eleven Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;