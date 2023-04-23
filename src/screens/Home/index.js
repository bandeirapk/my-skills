import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import { styles } from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning ☀️');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon ☀️');
    } else {
      setGreeting('Good Night 🌑');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Bandeira</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={event => {
          setNewSkill(event);
        }}
      />

      <Button onPress={handleAddSkill} />

      <View style={styles.containerCounterSkills}>
        <Text
          style={[
            styles.title,
            { backgroundColor: '#A370F7', borderRadius: 14, padding: 2 },
          ]}
        >
          {' '}
          My Skills{' '}
        </Text>
        <Text style={styles.counterSkills}> {mySkills.length} </Text>
      </View>

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
