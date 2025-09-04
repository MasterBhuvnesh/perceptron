import { StyleSheet, Text, TouchableOpacity, View, ViewToken } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function Card({
  item,
  onPress,
  viewableItems,
  disabled = false,
}: {
  item: any;
  onPress: () => void;
  viewableItems: Animated.SharedValue<ViewToken[]>;
  disabled?: boolean;
}) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Animated.View style={[styles.card, rStyle]}>
        <View style={styles.header}>
          <Animated.Text style={styles.title}>{item.title}</Animated.Text>
          <View
            style={[
              styles.dot,
              { backgroundColor: item.status === 'completed' ? '#4ade80' : '#fdba74' },
            ]}
          />
        </View>
        <Animated.Text style={styles.objective} numberOfLines={2}>
          {item.objective}
        </Animated.Text>
        <Animated.View style={styles.toolsContainer}>
          {item.tools.map((tool: string, index: number) => (
            <View key={index} style={styles.toolbox}>
              <Text style={styles.tool}>{tool}</Text>
            </View>
          ))}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'bold',
    paddingBottom: 8,
  },
  objective: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#000000c4',
  },
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  toolbox: {
    backgroundColor: '#777',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  tool: {
    fontSize: 12,
    fontFamily: 'regular',
    color: '#fff',
  },
});
