import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

import 'react-native-reanimated';
import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    'InterRegular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
    'InterThin': require('../assets/fonts/Inter_18pt-Thin.ttf'),
    'InterBold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
  });

  if (!loaded) {
    return  (
      <ThemedText>
        Cargado mi loco 
      </ThemedText>
    );
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="profile"
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack>

      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}
