import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
  size?: 'small' | 'medium' | 'large';
  activeColor?: string;
  inactiveColor?: string;
  disabled?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  size = 'medium',
  activeColor = '#4CAF50',
  inactiveColor = '#CCCCCC',
  disabled = false,
}) => {
  const animatedValue = React.useRef(new Animated.Value(isOn ? 1 : 0)).current;

  const sizes = {
    small: { width: 40, height: 24, thumbSize: 20 },
    medium: { width: 50, height: 30, thumbSize: 26 },
    large: { width: 60, height: 36, thumbSize: 32 },
  };

  const currentSize = sizes[size];

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, currentSize.width - currentSize.thumbSize - 2],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  const handlePress = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
        },
      ]}>
      <Animated.View
        style={[
          styles.track,
          {
            width: currentSize.width,
            height: currentSize.height,
            backgroundColor,
          },
        ]}>
        <Animated.View
          style={[
            styles.thumb,
            {
              width: currentSize.thumbSize,
              height: currentSize.thumbSize,
              transform: [{ translateX }],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

// Alternative Simple Toggle (iOS style)
export const SimpleToggle: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  activeColor = '#007AFF',
  inactiveColor = '#E5E5EA',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onToggle(!isOn)}
      disabled={disabled}
      style={[
        styles.simpleToggle,
        {
          backgroundColor: isOn ? activeColor : inactiveColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}>
      <View
        style={[
          styles.simpleThumb,
          {
            transform: [{ translateX: isOn ? 22 : 2 }],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

// Button-style Toggle
export const ButtonToggle: React.FC<{
  isOn: boolean;
  onToggle: (value: boolean) => void;
  onText?: string;
  offText?: string;
  activeColor?: string;
  inactiveColor?: string;
}> = ({
  isOn,
  onToggle,
  onText = 'ON',
  offText = 'OFF',
  activeColor = '#4CAF50',
  inactiveColor = '#9E9E9E',
}) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(!isOn)}
      style={[
        styles.buttonToggle,
        {
          backgroundColor: isOn ? activeColor : inactiveColor,
        },
      ]}>
      <Animated.Text style={styles.buttonText}>{isOn ? onText : offText}</Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Simple Toggle Styles
  simpleToggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  simpleThumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  // Button Toggle Styles
  buttonToggle: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ToggleButton;
