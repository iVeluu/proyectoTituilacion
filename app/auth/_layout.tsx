import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const status = useAuthStore((s) => s.status);

  if (status === "authenticated") {
    return <Redirect href="../(app)/(tabs)" />;
  }

  return <Slot />;
}
