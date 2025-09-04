import { useContent } from '@/api';
import { Loader } from '@/components';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useContent(id!);
  const router = useRouter();

  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Content will be coming soon</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginTop: 20, padding: 10, backgroundColor: '#eee', borderRadius: 8 }}>
          <Text style={{ textAlign: 'center', fontFamily: 'bold' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.date}>{data.date}</Text>
        </View>
        <View style={styles.separator} />
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.Label}>Description:</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.separator} />
        <Text style={styles.Label}>Theory:</Text>
        {data.theory.map((paragraph, index) => (
          <Text key={index} style={styles.theory}>
            {paragraph}
          </Text>
        ))}
        <View style={styles.separator} />
        <View style={styles.summaryContainer}>
          <Text style={styles.Label}>Summary:</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>by {data.author}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderCurve: 'continuous',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'regular',
    marginTop: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    fontFamily: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginTop: 4,
    fontFamily: 'regular',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 16,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  description: {
    marginVertical: 8,
    fontFamily: 'regular',
    color: '#555',
    lineHeight: 20,
  },
  Label: {
    fontFamily: 'bold',
    marginTop: 12,
    color: '#000',
  },
  theory: {
    fontFamily: 'regular',
    marginTop: 12,
    marginBottom: 12,
    lineHeight: 20,
    color: '#000',
  },
  summaryContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderCurve: 'continuous',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  summary: {
    fontFamily: 'regular',
    marginTop: 12,
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'regular',
    textAlign: 'center',
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});
