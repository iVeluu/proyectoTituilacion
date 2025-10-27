import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PLACEHOLDER_IMAGE = 'https://cdn-images.dzcdn.net/images/cover/37e446fe36cee17b6215e5d506d18354/1900x1900-000000-80-0-0.jpg';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      {/* Header con Perfil */}
      <View className="px-4 py-3 flex-row items-center justify-between bg-zinc-950 border-b border-zinc-800/50">
        <Text className="text-3xl font-bold text-white">Inicio</Text>
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
        <View className="px-4 py-4">
          {/* Chips de Filtro */}
          <View className="flex-row mb-6 space-x-3">
            <Pressable className="bg-green-500 rounded-full px-5 py-2.5 active:opacity-80 shadow-md">
              <Text className="text-black font-bold text-sm">Todo</Text>
            </Pressable>
            <Pressable className="bg-zinc-800 rounded-full px-5 py-2.5 active:opacity-80 border border-zinc-700">
              <Text className="text-white font-semibold text-sm">Música</Text>
            </Pressable>
            <Pressable className="bg-zinc-800 rounded-full px-5 py-2.5 active:opacity-80 border border-zinc-700">
              <Text className="text-white font-semibold text-sm">Podcasts</Text>
            </Pressable>
          </View>

          {/* Grid de Playlists */}
          <View className="mb-8">
            <Text className="text-white text-2xl font-bold mb-4">Escuchado recientemente</Text>
            
            <View className="space-y-3">
              {/* Fila 1 */}
              <View className="flex-row space-x-3">
                <Pressable className="flex-1 bg-zinc-800/80 rounded-lg overflow-hidden flex-row items-center active:bg-zinc-700/80 border border-zinc-700/50">
                  <Image 
                    source={{ uri: PLACEHOLDER_IMAGE }}
                    className="w-14 h-14"
                    resizeMode="cover"
                  />
                  <Text className="text-white font-semibold flex-1 px-3" numberOfLines={2}>
                    Mix favorito
                  </Text>
                </Pressable>
                <Pressable className="flex-1 rounded-lg overflow-hidden flex-row items-center active:opacity-80 border border-zinc-700/50">
                  <LinearGradient
                    colors={['#7C3AED', '#2563EB']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="w-14 h-14 items-center justify-center">
                    <Text className="text-3xl">❤️</Text>
                  </LinearGradient>
                  <Text className="text-white font-semibold flex-1 px-3 bg-zinc-800/80" numberOfLines={2}>
                    Tus me gusta
                  </Text>
                </Pressable>
              </View>

              {/* Fila 2 */}
              <View className="flex-row space-x-3">
                <Pressable className="flex-1 bg-zinc-800/80 rounded-lg overflow-hidden flex-row items-center active:bg-zinc-700/80 border border-zinc-700/50">
                  <Image 
                    source={{ uri: PLACEHOLDER_IMAGE }}
                    className="w-14 h-14"
                    resizeMode="cover"
                  />
                  <Text className="text-white font-semibold flex-1 px-3" numberOfLines={2}>
                    Chill Vibes
                  </Text>
                </Pressable>
                <Pressable className="flex-1 bg-zinc-800/80 rounded-lg overflow-hidden flex-row items-center active:bg-zinc-700/80 border border-zinc-700/50">
                  <Image 
                    source={{ uri: PLACEHOLDER_IMAGE }}
                    className="w-14 h-14"
                    resizeMode="cover"
                  />
                  <Text className="text-white font-semibold flex-1 px-3" numberOfLines={2}>
                    Workout
                  </Text>
                </Pressable>
              </View>

              {/* Fila 3 */}
              <View className="flex-row space-x-3">
                <Pressable className="flex-1 bg-zinc-800/80 rounded-lg overflow-hidden flex-row items-center active:bg-zinc-700/80 border border-zinc-700/50">
                  <Image 
                    source={{ uri: PLACEHOLDER_IMAGE }}
                    className="w-14 h-14"
                    resizeMode="cover"
                  />
                  <Text className="text-white font-semibold flex-1 px-3" numberOfLines={2}>
                    Descubrimientos
                  </Text>
                </Pressable>
                <Pressable className="flex-1 bg-zinc-800/80 rounded-lg overflow-hidden flex-row items-center active:bg-zinc-700/80 border border-zinc-700/50">
                  <Image 
                    source={{ uri: PLACEHOLDER_IMAGE }}
                    className="w-14 h-14"
                    resizeMode="cover"
                  />
                  <Text className="text-white font-semibold flex-1 px-3" numberOfLines={2}>
                    Noche
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Sección de Recomendados */}
          <View className="mb-8">
            <Text className="text-white text-2xl font-bold mb-4">Recomendado para ti</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <Pressable key={item} className="w-40 mr-3 active:opacity-80">
                  <View className="w-40 h-40 rounded-lg mb-3 bg-zinc-800 overflow-hidden border border-zinc-700">
                    <Image 
                      source={{ uri: PLACEHOLDER_IMAGE }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <Text className="text-white font-semibold mb-1 text-base" numberOfLines={1}>
                    Playlist {item}
                  </Text>
                  <Text className="text-gray-400 text-xs leading-4" numberOfLines={2}>
                    Mix de canciones que te pueden gustar
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Separador */}
          <View className="h-px bg-zinc-800 my-6" />

          {/* Otra sección */}
          <View className="mb-6">
            <Text className="text-white text-2xl font-bold mb-4">Tus artistas favoritos</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4].map((item) => (
                <Pressable key={item} className="w-36 mr-4 items-center active:opacity-80">
                  <View className="w-36 h-36 rounded-full mb-3 bg-zinc-800 overflow-hidden border-2 border-zinc-700">
                    <Image 
                      source={{ uri: PLACEHOLDER_IMAGE }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <Text className="text-white font-semibold text-sm text-center" numberOfLines={1}>
                    Artista {item}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
