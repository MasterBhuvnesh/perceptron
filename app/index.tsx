import { useTopics } from '@/api';
import { StyleSheet, Text, View } from 'react-native';
export default function Index() {
  const { data } = useTopics();
  console.log(data);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>[ app/index.tsx ]</Text> */}
      {data?.map((topic) => (
        <Text key={topic.id} style={styles.text}>
          {topic.title}
        </Text>
      ))}
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
