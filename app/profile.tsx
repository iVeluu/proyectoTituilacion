import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {

  const { setStatusToUnauthenticated, status, setStatusToAuthenticated } = useAuthStore();

  const menuItems = [
    { icon: '👤', title: 'Ver perfil', subtitle: 'Alejandro Luna' },
    { icon: '➕', title: 'Agregar cuenta', subtitle: null },
    { icon: '⭐', title: 'Tu Premium', subtitle: 'Familiar' },
    { icon: '⚡', title: 'Novedades', subtitle: null },
    { icon: '🕐', title: 'Contenido reciente', subtitle: null },
    { icon: '⚙️', title: 'Configuración y privacidad', subtitle: null },
    { icon: '🐺', title: 'Cerrar sesion', subtitle: null },
  ];

  const handlePress = (itemTitle: string) => {
    switch (itemTitle) {
      case 'Ver perfil':
        console.log('Navegar a ver perfil');
        break;

      case 'Agregar cuenta':
        console.log('Navegar a agregar cuenta');
        router.push('/auth/register');
        break;

      case 'Tu Premium':
        console.log('Abrir información de plan Premium');
        break;

      case 'Novedades':
        console.log('Mostrar novedades o changelog');
        break;

      case 'Contenido reciente':
        console.log('Mostrar contenido reciente');
        break;

      case 'Configuración y privacidad':
        console.log(`STATUS ${status}`);
        setStatusToAuthenticated();
        console.log('Ir a configuración');
        break;

      case 'Cerrar sesion':
        console.log(`STATUS: ${status}`);
        router.dismissAll?.();
        setStatusToUnauthenticated();
        break;

      default:
        console.log(`Seleccionaste: ${itemTitle}`);
        break;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      {/* Header */}
      <View className="px-4 py-4 flex-row items-center justify-between border-b border-zinc-800">
        <View className="flex-row items-center space-x-4">
          <LinearGradient
            colors={['#A855F7', '#EC4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="w-16 h-16 rounded-full items-center justify-center shadow-xl"
          >
            <Text className="text-white text-2xl font-bold">AL</Text>
          </LinearGradient>
          <View>
            <Text className="text-white text-xl font-bold">Alejandro Luna</Text>
            <Text className="text-gray-400 text-sm mt-0.5">Ver perfil</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center active:opacity-70 rounded-full bg-zinc-800 border border-zinc-700"
        >
          <Text className="text-gray-300 text-2xl font-light">×</Text>
        </Pressable>
      </View>

      <ScrollView className="flex-1">
        <View className="py-2">
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => handlePress(item.title)}
              className="px-4 py-4 flex-row items-center space-x-4 active:bg-zinc-900 border-b border-zinc-800/30"
            >
              <View className="w-11 h-11 items-center justify-center bg-zinc-800 rounded-full border border-zinc-700">
                <Text className="text-2xl">{item.icon}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white text-base font-semibold">{item.title}</Text>
                {item.subtitle && (
                  <Text className="text-gray-400 text-sm mt-1">{item.subtitle}</Text>
                )}
              </View>
              <Text className="text-gray-500 text-xl">›</Text>
            </Pressable>
          ))}
        </View>

        {/* Separador */}
        <View className="h-px bg-zinc-800 mx-4 my-4" />

        {/* Sección Mensajes */}
        <View className="px-4 py-4">
          <Text className="text-white text-lg font-bold mb-2">Mensajes</Text>
          <Text className="text-gray-400 text-sm mb-5 leading-5">
            Comparte lo que te gusta con tus personas favoritas en Spotify.
          </Text>
          <Pressable className="bg-zinc-900 rounded-xl py-4 px-6 flex-row items-center space-x-3 active:opacity-80 border border-zinc-800">
            <View className="w-11 h-11 bg-zinc-800 rounded-full items-center justify-center border border-zinc-700">
              <Text className="text-white text-xl">✏️</Text>
            </View>
            <Text className="text-white font-semibold text-base">Nuevo mensaje</Text>
          </Pressable>
        </View>

        {/* Espacio adicional */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  );
}
