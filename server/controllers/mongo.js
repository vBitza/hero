import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

async function connect() {
  const mongoMemoryServer = await MongoMemoryServer.create();
  const dbUrl = mongoMemoryServer.getUri();
  return mongoose.connect(dbUrl);
}

export {
  connect,
};
