import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function useCustomFonts() {
  const [loaded, error] = useFonts({
    regular: require('@/assets/fonts/ProductSansRegular.ttf'),
    bold: require('@/assets/fonts/ProductSansBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return { loaded, error };
}
