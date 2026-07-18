const mongoose = require('mongoose');

const catchSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  species: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  length: Number,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: [Number],
    address: String
  },
  date: {
    type: Date,
    required: true
  },
  time: String,
  weather: {
    temperature: Number,
    humidity: Number,
    windSpeed: Number,
    condition: String
  },
  tide: {
    type: String,
    enum: ['Rising', 'Falling', 'High', 'Low']
  },
  notes: String,
  photos: [String],
  bait: String,
  technique: String,
  moonPhase: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

catchSchema.index({ 'location.coordinates': '2dsphere' });

module.exports = mongoose.model('Catch', catchSchema);
