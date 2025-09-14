import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { tutorials } from '../data/tutorials';

export default function HomeScreen({ navigation }) {
  const categories = [...new Set(tutorials.map(t => t.category))];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 20, backgroundColor: '#eee', marginVertical: 5, borderRadius: 5 }}
            onPress={() => navigation.navigate('Tutorials', { category: item })}
          >
            <Text style={{ fontSize: 18 }}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
