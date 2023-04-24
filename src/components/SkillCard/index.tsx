import React from 'react';

import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  skill: string;
  onRemove: () => void;
};

export function SkillCard({ skill, onRemove, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.buttonSkill} onPress={onRemove} {...rest}>
      <Text style={styles.textSkill}> {skill} </Text>
    </TouchableOpacity>
  );
}
