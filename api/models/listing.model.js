import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be less than 0"],
    },
    discount: {
      type: Number,
      required: [true, "Discount is required"],
      min: [0, "Discount cannot be less than 0"],
      max: [100, "Discount cannot be more than 100"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Bathrooms is required"],
      min: [0, "Bathrooms cannot be less than 0"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Bedrooms is required"],
      min: [0, "Bedrooms cannot be less than 0"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      trim: true,
      enum: ["House", "Apartment", "Studio"],
    },
    imageUrls: {
      type: Array,
      required: [true, "Image is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    userRef: {
      type: String,
      required: [true, "User is required"],
    },
    parking: {
      type: Boolean,
      default: false,
    },
    offers: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
