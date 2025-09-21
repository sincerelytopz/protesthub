// Protest model definition here

import mongoose from 'mongoose';

const protestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('Protest', protestSchema);