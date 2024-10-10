import { createClient, Session } from '@supabase/supabase-js';
import { LoginData } from '../routes/login/-login.types';

const apiKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(
  'https://irbpnscrebqftjdkmfih.supabase.co',
  apiKey
);

export const login = async (data: LoginData) =>
  await supabase.auth.signInWithPassword(data);

export const logout = async () => {
  return await supabase.auth.signOut();
};

export const signup = async (data: LoginData) =>
  await supabase.auth.signUp(data);
export const getSession = (setSession: (session: Session | null) => void) =>
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });
export const onAuthChange = (setSession: (session: Session | null) => void) =>
  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });
