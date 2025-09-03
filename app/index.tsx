import { useTopics } from '@/api';
import Card from '@/components/Card';
import Loader from '@/components/loader';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
export default function Index() {
  const { data, isLoading, error } = useTopics();
  const router = useRouter();
  const viewableItems = useSharedValue<ViewToken[]>([]);

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
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => (
          <Card
            item={item}
            viewableItems={viewableItems}
            onPress={() => router.push({ pathname: '/content/[id]', params: { id: item.id } })}
          />
        )}
        onEndReachedThreshold={0.5}
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
