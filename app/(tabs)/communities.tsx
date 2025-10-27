import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CommunitiesScreen() {
  const communities = [
    { 
      name: 'Amantes del Rock', 
      members: '15.2K', 
      colors: ['#EF4444', '#EC4899'] as const,
      icon: '🎸'
    },
    { 
      name: 'Chill & Relax', 
      members: '24.8K', 
      colors: ['#3B82F6', '#06B6D4'] as const,
      icon: '🌊'
    },
    { 
      name: 'Fitness Motivation', 
      members: '8.9K', 
      colors: ['#F97316', '#EAB308'] as const,
      icon: '💪'
    },
    { 
      name: 'Podcast Lovers', 
      members: '12.3K', 
      colors: ['#A855F7', '#6366F1'] as const,
      icon: '🎙️'
    },
    { 
      name: 'Música Latina', 
      members: '31.5K', 
      colors: ['#22C55E', '#10B981'] as const,
      icon: '🎵'
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      {/* Header con Perfil */}
      <View className="px-5 py-4 flex-row items-center justify-between bg-zinc-950 border-b border-zinc-800/50">
        <Text className="text-3xl font-bold text-white">Comunidades</Text>
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
        <View className="px-5 py-5">
          {/* Comunidades Destacadas */}
          <Text className="text-white text-2xl font-bold mb-5">Comunidades destacadas</Text>
          
          <View className="space-y-4">
            {communities.map((community, index) => (
              <Pressable
                key={index}
                className="rounded-2xl overflow-hidden active:opacity-90 shadow-xl mb-4"
                style={{ elevation: 5 }}>
                <LinearGradient
                  colors={[community.colors[0], community.colors[1]]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="p-6">
                  <View className="flex-row items-center justify-between mb-5">
                    <View className="w-16 h-16 bg-white/20 rounded-full items-center justify-center backdrop-blur-xl border-2 border-white/30">
                      <Text className="text-4xl">{community.icon}</Text>
                    </View>
                    <View className="bg-white/95 rounded-full px-6 py-3 shadow-lg">
                      <Text className="text-black font-bold text-sm">Unirse</Text>
                    </View>
                  </View>
                  <Text className="text-white text-xl font-bold mb-2">{community.name}</Text>
                  <View className="flex-row items-center space-x-2">
                    <View className="flex-row">
                      <View className="w-7 h-7 rounded-full bg-white/30 border-2 border-white/80" />
                      <View className="w-7 h-7 rounded-full bg-white/30 border-2 border-white/80 -ml-2" />
                      <View className="w-7 h-7 rounded-full bg-white/30 border-2 border-white/80 -ml-2" />
                    </View>
                    <Text className="text-white/95 text-sm font-semibold">
                      {community.members} miembros
                    </Text>
                  </View>
                </LinearGradient>
              </Pressable>
            ))}
          </View>

          {/* Separador */}
          <View className="h-px bg-zinc-800 my-8" />

          {/* Tus Comunidades */}
          <Text className="text-white text-2xl font-bold mb-5">Tus comunidades</Text>
          
          <View className="bg-zinc-900 rounded-2xl p-8 items-center border border-zinc-800">
            <View className="w-24 h-24 bg-zinc-800 rounded-full items-center justify-center mb-5 border-2 border-zinc-700">
              <Text className="text-5xl">👥</Text>
            </View>
            <Text className="text-white text-xl font-bold mb-3">
              Únete a una comunidad
            </Text>
            <Text className="text-gray-400 text-center text-sm mb-6 leading-5 px-4">
              Conecta con personas que comparten tus gustos musicales
            </Text>
            <Pressable className="bg-white rounded-full px-8 py-3.5 active:opacity-80 shadow-lg">
              <Text className="text-black font-bold text-base">Explorar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
