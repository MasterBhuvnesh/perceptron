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
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* <Image source={require('@/assets/images/icon.png')} style={styles.icon} /> */}
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.separator} />
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={styles.Label}>Description:</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.separator} />
        <Text style={styles.Label}>Theory:</Text>
        <Text style={styles.theory}>{data.theory}</Text>
        <View style={styles.separator} />
        <View style={styles.summaryContainer}>
          <Text style={styles.Label}>Summary:</Text>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>by @MasterBhuvnesh</Text>
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
  // icon: {
  //   width: 50,
  //   height: 50,
  //   alignSelf: 'center',
  // },
  title: {
    fontSize: 24,
    fontFamily: 'bold',
    textAlign: 'center',
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
  },
  Label: {
    fontFamily: 'bold',
    marginTop: 12,
  },
  theory: {
    fontFamily: 'regular',
    marginTop: 12,
    marginBottom: 12,
  },
  summaryContainer: {
    // marginTop: 12,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderCurve: 'continuous',
    borderRadius: 12,
  },
  summary: {
    fontFamily: 'regular',
    marginTop: 12,
    marginBottom: 12,
  },
  footer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'regular',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 12,
  },
});
