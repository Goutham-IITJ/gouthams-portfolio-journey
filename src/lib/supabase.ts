// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Fetch the environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_ANON_KEY?.slice(0, 10));
