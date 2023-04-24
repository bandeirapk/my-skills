import React, { useState, useEffect } from 'react';

import { View, Text, TextInput, FlatList, Alert } from 'react-native';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

import { styles } from './styles';

type SkillData = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const greetingColor = {
    goodMorning: '#F7DC6F',
    goodAfternoon: '#F39C12',
    goodNight: '#2C3E50',
  };

  function handleAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    const skillExists = mySkills.find(skill => skill.name === data.name);

    if (skillExists) {
      Alert.alert(
        'Habilidade já cadastrada',
        `A habilidade ${data.name} já foi cadastrada`,
      );
      return;
    }

    if (newSkill === '') {
      Alert.alert('Campo vazio', 'Por favor, preencha o campo');
      return;
    }

    setMySkills(oldState => [...oldState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    Alert.alert(
      'Remover',
      'Você tem certeza que deseja remover essa habilidade?',
      [
        {
          text: 'Sim',
          onPress: () =>
            setMySkills(oldState => oldState.filter(skill => skill.id !== id)),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    );
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

      <Text
        style={[
          styles.greeting,
          greeting === 'Good Night 🌑' && { color: greetingColor.goodNight },
          greeting === 'Good Afternoon ☀️' && {
            color: greetingColor.goodAfternoon,
          },
          greeting === 'Good Morning ☀️' && {
            color: greetingColor.goodMorning,
          },
        ]}
      >
        {greeting}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={text => {
          setNewSkill(text);
        }}
        value={newSkill}
      />

      <Button title="Add" onPress={handleAddSkill} />

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
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <Text style={styles.listParticipantEmpty}>
            Nenhuma habilidade adicionado! {'\n'}
            Cadastre habilidades na sua lista!
          </Text>
        )}
        renderItem={({ item }) => {
          return (
            <SkillCard
              skill={item.name}
              onRemove={() => handleRemoveSkill(item.id)}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
