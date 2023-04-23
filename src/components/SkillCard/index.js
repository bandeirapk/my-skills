import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={skill}>
      <Text style={styles.textSkill}> {skill} </Text>
    </TouchableOpacity>
  );
}
