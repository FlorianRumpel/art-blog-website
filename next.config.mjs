/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VITE_FIREBASE_API_KEY: "AIzaSyCal8xJnKRT0wAibE4q_95WagglRhofrG8",
    VITE_FIREBASE_APP_ID: "1:506877292870:web:44ad33ce5b352ea9f1b547",
    VITE_PASSWORD: "password123",
    BASE_URL: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/emelie-christina-trenkler.appspot.com/**",
      },
    ],
  },
};

export default nextConfig;
