import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
const CustomLoader = ({ visible = true }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, fadeAnim]);

  return (
    <Animated.View style={[styles.loaderContainer, { opacity: fadeAnim }]}>
      <Animated.Text style={{ color: '#000', fontFamily: 'regular' }}>Loading ..</Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default CustomLoader;
