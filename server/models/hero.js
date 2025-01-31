import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  superPower: {
    type: String,
    required: true,
  },
  humilityScore: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
}, { timestamps: true });


const HeroModel = mongoose.model('hero', schema, 'heros');
export default HeroModel;
