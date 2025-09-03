import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.objective} numberOfLines={2}>
          {item.objective}
        </Text>
        <View style={styles.toolsContainer}>
          {item.tools.map((tool: string, index: number) => (
            <View key={index} style={styles.toolbox}>
              <Text style={styles.tool}>{tool}</Text>
            </View>
          ))}
        </View>
      </View>
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
  title: {
    fontSize: 16,
    fontFamily: 'bold',
    paddingBottom: 8,
  },
  objective: {
    fontSize: 14,
    fontFamily: 'regular',
    color: '#555',
  },
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  toolbox: {
    backgroundColor: '#999',
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
