// MongoDB connection logic here

import { MongoClient } from 'mongodb';

const uri = 'YOUR_MONGODB_URI';
const client = new MongoClient(uri);

export default client;