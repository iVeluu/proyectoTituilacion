import 'react-native-reanimated';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useEffect } from 'react';
import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { checkStatus, status } = useAuthStore();

  const [loaded] = useFonts({
    'InterRegular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'InterThin': require('../assets/fonts/Inter_18pt-Thin.ttf'),
    'InterBold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
  });

  useEffect(() => {
    checkStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded || status === 'checking' ) {
    return  (
      <ThemedText style={{ fontFamily: 'InterRegular'}}>
        Cargado mi loco 
      </ThemedText>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" />
        <Stack.Screen name="(app)" />
      </Stack>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </>
  );
}
