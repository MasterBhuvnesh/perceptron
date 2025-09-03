//  We can have a setting icon her that will open a bottomsheet in which we can have notification thing.
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToggleButton from './ToggleButton';

const Notification = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Notification : {isEnabled ? 'On' : 'Off'}</Text>
      <ToggleButton isOn={isEnabled} onToggle={setIsEnabled} size="small" activeColor="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 8,
    fontFamily: 'regular',
  },
});

export default Notification;
