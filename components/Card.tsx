import { Text, TouchableOpacity, View } from 'react-native';

export default function Card({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 16, margin: 8, backgroundColor: '#f1f1f1', borderRadius: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text numberOfLines={2}>{item.objective}</Text>
      </View>
    </TouchableOpacity>
  );
}
