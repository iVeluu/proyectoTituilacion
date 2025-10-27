import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PLACEHOLDER_IMAGE = 'https://cdn-images.dzcdn.net/images/cover/37e446fe36cee17b6215e5d506d18354/1900x1900-000000-80-0-0.jpg';

export default function LibraryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between bg-zinc-950 border-b border-zinc-800/50">
        <View className="flex-row items-center space-x-3">
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
          <Text className="text-2xl font-bold text-white">Tu Biblioteca</Text>
        </View>
        <Pressable className="w-9 h-9 items-center justify-center active:opacity-70">
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Filtros */}
      <View className="px-4 py-3 bg-zinc-950">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable className="bg-zinc-800 rounded-full px-4 py-2.5 mr-2 active:opacity-80 border border-zinc-700">
            <Text className="text-white font-semibold text-sm">Playlists</Text>
          </Pressable>
          <Pressable className="bg-zinc-800 rounded-full px-4 py-2.5 mr-2 active:opacity-80 border border-zinc-700">
            <Text className="text-white font-semibold text-sm">Artistas</Text>
          </Pressable>
          <Pressable className="bg-zinc-800 rounded-full px-4 py-2.5 mr-2 active:opacity-80 border border-zinc-700">
            <Text className="text-white font-semibold text-sm">Álbumes</Text>
          </Pressable>
          <Pressable className="bg-zinc-800 rounded-full px-4 py-2.5 mr-2 active:opacity-80 border border-zinc-700">
            <Text className="text-white font-semibold text-sm">Podcasts</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Lista */}
      <ScrollView className="flex-1 bg-zinc-950">
        <View className="px-4 py-2">
          {/* Canciones que te gustan */}
          <Pressable className="flex-row items-center active:opacity-80 py-3">
            <LinearGradient
              colors={['#7C3AED', '#2563EB']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="w-16 h-16 rounded-lg items-center justify-center shadow-lg mr-4">
              <Text className="text-white text-2xl">❤️</Text>
            </LinearGradient>
            <View className="flex-1">
              <Text className="text-white font-semibold text-base">Tus me gusta</Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="musical-note" size={10} color="#22C55E" style={{ marginRight: 6 }} />
                <Text className="text-gray-400 text-sm">Playlist • 142 canciones</Text>
              </View>
            </View>
          </Pressable>

          {/* Items de la biblioteca */}
          {[
            { name: 'Mix favorito', type: 'Playlist' },
            { name: 'Chill Vibes', type: 'Playlist' },
            { name: 'Descubrimientos', type: 'Playlist' },
            { name: 'Workout', type: 'Playlist' },
            { name: 'Podcast Favorito', type: 'Podcast' },
            { name: 'Estudio', type: 'Playlist' },
          ].map((item, index) => (
            <Pressable key={index} className="flex-row items-center active:opacity-80 py-3">
              <View className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 mr-4">
                <Image 
                  source={{ uri: PLACEHOLDER_IMAGE }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1">
                <Text className="text-white font-semibold text-base">{item.name}</Text>
                <Text className="text-gray-400 text-sm mt-1">{item.type}</Text>
              </View>
              <Pressable className="w-10 h-10 items-center justify-center">
                <Ionicons name="ellipsis-vertical" size={18} color="#9CA3AF" />
              </Pressable>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
