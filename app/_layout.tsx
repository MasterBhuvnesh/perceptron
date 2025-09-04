import { Loader } from '@/components';
import { useCustomFonts, useFrameworkReady } from '@/hooks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const queryClient = new QueryClient();

export default function RootLayout() {
  useFrameworkReady();

  const { loaded, error } = useCustomFonts();

  if (!loaded && !error) {
    return <Loader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" hideTransitionAnimation="fade" hidden />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'fade',
        }}>
        <Stack.Screen
          name="index"
          // options={{
          //   title: 'Perceptron',
          //   headerStyle: { backgroundColor: '#000' },
          //   headerLargeTitleShadowVisible: false,
          //   headerShadowVisible: false,
          // }}
        />
        <Stack.Screen
          name="content/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
