import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // Read directly from process.env (Render sets these as environment variables)
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error('MONGO_URI environment variable is not set. Please add it in Render dashboard.');
    }

    console.log('[DB] Attempting to connect to MongoDB...');
    
    const conn = await mongoose.connect(mongoUri);
    console.log('✓ MongoDB connected:', conn.connection.host);
  } catch (err) {
    console.error('✗ MongoDB connection error:', err.message);
    throw err;
  }
};