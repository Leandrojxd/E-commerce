import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Coloca aquí tu URL de Supabase
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY; // Coloca aquí tu clave de Supabase

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials are missing');
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;