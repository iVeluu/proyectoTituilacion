import { User } from "@/core/auth/interface/user";
import { create } from "zustand";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  setStatusToAuthenticated: () => void;
  setStatusToUnauthenticated: () => void;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  //Properties
  status: "unauthenticated",
  token: undefined,
  user: undefined,

  //Actions
  login: async (email: string, password: string) => {
    return true;
  },

  checkStatus: async () => {
    //TODO:
  },

  logout: async () => {
    //TODO:
  },
  setStatusToAuthenticated: () => {
    set({ status: 'authenticated'})    
  },
  
  setStatusToUnauthenticated: () => {
    set({ status: 'unauthenticated'})    
  },
}));
