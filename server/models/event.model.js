import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    eventname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    timeduration: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    place: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    budget: {
        type: Number,
        default: 0,
      required: true,
    },

    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Event', eventSchema);
