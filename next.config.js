/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['xzkdttnnligjvspxlqhe.supabase.co'],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    TWILIO_ACCOUNT_SID:process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER:process.env.TWILIO_PHONE_NUMBER,
  },
};

module.exports = {
  

  webpack(config) {
    config.resolve.fallback = {
      // Si lo omites, se eliminarán todas las demás opciones de fallback especificadas
      // por Next.js.
      ...config.resolve.fallback,

      fs: false, // la solución
    };
    return config;
  },

  ...nextConfig,
};