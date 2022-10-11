const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGO_URI || "mongodb+srv://graffiti:mern%402022@cluster0.jauhpsq.mongodb.net/?retryWrites=true&w=majority",
    serverUrl: process.env.serverUrl || 'http://localhost:4000',
  }
export default config;``