import { useTopics } from '@/api';
import Card from '@/components/Card';
import Loader from '@/components/loader';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const { data, isLoading, error } = useTopics();
  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => router.push({ pathname: '/content/[id]', params: { id: item.id } })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'regular',
  },
  text: {
    fontFamily: 'regular',
    color: '#333',
  },
});
