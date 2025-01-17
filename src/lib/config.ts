// Environment configuration
export const config = {
  supabase: {
    url: import.meta.env.PUBLIC_SUPABASE_URL || '',
    anonKey: import.meta.env.PUBLIC_SUPABASE_ANON_KEY || ''
  },
  email: {
    from: 'spenere@126.com',
    smtp: {
      host: 'smtp.126.com',
      port: 465,
      secure: true
    }
  }
} as const;