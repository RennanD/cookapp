import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

import { MotiView, useAnimationState } from 'moti'

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Toggle() {

  const toggleAnitmatedState = useAnimationState({
    closed: {
      height: 70
    },
    opened: {
      height: 180
    }
  })

  function handleOpenToggle() {
    toggleAnitmatedState.transitionTo('opened')
  }

  function handleCloseToggle() {
    toggleAnitmatedState.transitionTo('closed')
  }

  return (
    
      <MotiView 
        state={toggleAnitmatedState} 
        style={styles.container} 
        transition={{ type: 'timing', duration: 300 }}
      >
        <Pressable 
          onPressIn={handleOpenToggle}
          onPressOut={handleCloseToggle}
        >
          <Feather
            name="tag"
            color={theme.colors.white}
            size={24}
          />
        </Pressable>
        <View style={styles.info}>
          <Text style={styles.label}>
            Calories
          </Text>

          <Text style={styles.value}>
            150
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>
            Weight
          </Text>

          <Text style={styles.value}>
            190g
          </Text>
        </View>
      </MotiView>

  );
}