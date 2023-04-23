import React, { useState } from 'react';

import { View, Text, TextInput, FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import { styles } from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Bandeira</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={event => {
          setNewSkill(event);
        }}
      />

      <Button onPress={handleAddSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}> My Skills </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <SkillCard skill={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
