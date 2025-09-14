import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { tutorials } from '../data/tutorials';

export default function TutorialScreen({ route, navigation }) {
  const { category } = route.params;
  const filtered = tutorials.filter(t => t.category === category);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 20, backgroundColor: '#ddd', marginVertical: 5, borderRadius: 5 }}
            onPress={() => navigation.navigate('Detail', { tutorialId: item.id })}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
