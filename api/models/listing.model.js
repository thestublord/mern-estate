import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    discount: {
      type: Number,
      required: [true, "Discount is required"],
    },
    bathrooms: {
      type: Number,
      required: [true, "Bathrooms is required"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Bedrooms is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    imageUrls: {
      type: Array,
      required: [true, "Image is required"],
    },
    userRef: {
      type: String,
      required: [true, "User is required"],
    },
    parking: {
      type: Boolean,
      default: false,
    },
    offer: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
