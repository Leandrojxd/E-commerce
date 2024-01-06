/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      domains:['xzkdttnnligjvspxlqhe.supabase.co'],
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    },
  };
  
module.exports = nextConfig;
  