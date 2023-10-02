import mongoose from 'mongoose';
const { Schema } = mongoose;

const provinceSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
      unique: true,
    },
    cat: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
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

export default mongoose.model('Province', provinceSchema);
