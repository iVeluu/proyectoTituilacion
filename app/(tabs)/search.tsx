import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  const categories = [
    { name: 'Música', color: '#DC2626' },
    { name: 'Podcasts', color: '#059669' },
    { name: 'En vivo', color: '#7C3AED' },
    { name: 'Eventos', color: '#2563EB' },
    { name: 'Para ti', color: '#EA580C' },
    { name: 'Nuevos lanzamientos', color: '#DB2777' },
    { name: 'Pop', color: '#6366F1' },
    { name: 'Rock', color: '#374151' },
    { name: 'Electrónica', color: '#0891B2' },
    { name: 'Hip-Hop', color: '#CA8A04' },
    { name: 'Jazz', color: '#D97706' },
    { name: 'Clásica', color: '#7C3AED' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      {/* Header con Perfil */}
      <View className="px-5 py-4 flex-row items-center justify-between bg-zinc-950 border-b border-zinc-800/50">
        <Text className="text-3xl font-bold text-white">Buscar</Text>
        <Link href="/profile" asChild>
          <Pressable className="active:scale-95">
            <LinearGradient
              colors={['#A855F7', '#EC4899']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-11 h-11 rounded-full items-center justify-center shadow-lg">
              <Text className="text-white text-lg font-bold">AL</Text>
            </LinearGradient>
          </Pressable>
        </Link>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5 py-4">
          {/* Barra de Búsqueda */}
          <View className="bg-white rounded-xl px-4 py-3.5 flex-row items-center mb-6 shadow-lg">
            <Ionicons name="search" size={22} color="#374151" />
            <TextInput
              placeholder="¿Qué quieres escuchar?"
              placeholderTextColor="#6B7280"
              className="flex-1 text-gray-900 text-base font-medium ml-3"
            />
          </View>

          {/* Categorías */}
          <Text className="text-white text-xl font-bold mb-4">Explorar todo</Text>
          
          <View className="flex-row flex-wrap justify-between">
            {categories.map((category, index) => (
              <Pressable
                key={index}
                className="w-[48%] h-28 rounded-xl mb-3 overflow-hidden active:opacity-80 shadow-lg p-4 justify-between"
                style={{ backgroundColor: category.color, elevation: 5 }}>
                <Text className="text-white font-bold text-lg leading-5">{category.name}</Text>
                <View className="absolute -right-4 -bottom-2 w-20 h-20 bg-black/20 rounded-xl rotate-12" />
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
