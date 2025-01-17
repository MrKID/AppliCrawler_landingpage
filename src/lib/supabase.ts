import { createClient } from '@supabase/supabase-js';
import { config } from './config';

if (!config.supabase.url) {
  throw new Error('Missing Supabase URL');
}

if (!config.supabase.anonKey) {
  throw new Error('Missing Supabase anonymous key');
}

export const supabase = createClient(
  config.supabase.url,
  config.supabase.anonKey
);