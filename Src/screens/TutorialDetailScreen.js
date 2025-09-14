import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tutorials } from '../data/tutorials';

export default function TutorialDetailScreen({ route }) {
  const { tutorialId } = route.params;
  const tutorial = tutorials.find(t => t.id === tutorialId);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    const data = await AsyncStorage.getItem(`tutorial-${tutorialId}`);
    if (data) setCompleted(JSON.parse(data));
  };

  const toggleStep = async (index) => {
    let newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted = newCompleted.filter(i => i !== index);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
    await AsyncStorage.setItem(`tutorial-${tutorialId}`, JSON.stringify(newCompleted));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{tutorial.title}</Text>
      <FlatList
        data={tutorial.steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ padding: 15, marginVertical: 5, backgroundColor: completed.includes(index) ? '#a0e7a0' : '#eee', borderRadius: 5 }}>
            <Text style={{ fontSize: 18 }}>{item}</Text>
            <Button title={completed.includes(index) ? "Undo" : "Mark Completed"} onPress={() => toggleStep(index)} />
          </View>
        )}
      />
    </View>
  );
}
