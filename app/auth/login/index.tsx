import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Button, Text, View } from "react-native";



export default function LoginScreen() {

  const { setStatusToAuthenticated } = useAuthStore();

  const handleLogin = () => {
    setStatusToAuthenticated()
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Iniciar sesión</Text>
      <Button 
        onPress={handleLogin}
        title="Autenticar"
      />
    </View>
  );
}
