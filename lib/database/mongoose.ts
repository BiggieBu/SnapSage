import { promises } from 'dns';
import mongoose, { Mongoose } from 'mongoose'
import { cache } from 'react';

const MONGODB_URL = process.env.MONGODB_URL;

//severless, stateless mongoose in next
//each request is independent
//more scalable and reliable
//but too many connections
//we need caching to optimize
interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null,
    }
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise = cached.promise || mongoose.connect(
        MONGODB_URL, { dbName: "SnapSage", bufferCommands: false });
    cached.conn = await cached.promise;

    return cached.conn;
}