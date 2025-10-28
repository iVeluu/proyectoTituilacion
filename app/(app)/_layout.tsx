import { Redirect, Slot } from "expo-router";

import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

export default function AppLayout() {

  const { status } = useAuthStore();
  if (status !== "authenticated") {
    return <Redirect href="/auth/login" />;
  }

  return <Slot />;
}
