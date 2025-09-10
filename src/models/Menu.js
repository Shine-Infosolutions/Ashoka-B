const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    // Beverages
    WELCOME_DRINKS: [
      {
        type: String,
        trim: true,
      },
    ],

    // Soups
    STARTER_VEG: [
      {
        type: String,
        trim: true,
      },
    ],
    SALAD: [
      {
        type: String,
        trim: true,
      },
    ],

    RAITA: [
      {
        type: String,
        trim: true,
      },
    ],
    MAIN_COURSE_PANEER: [
      {
        type: String,
        trim: true,
      },
    ],
    MAIN_COURSE: [
      {
        type: String,
        trim: true,
      },
    ],
    VEGETABLES: [
      {
        type: String,
        trim: true,
      },
    ],
    DAL: [
      {
        type: String,
        trim: true,
      },
    ],
    RICE: [
      {
        type: String,
        trim: true,
      },
    ],
    BREADS: [
      {
        type: String,
        trim: true,
      },
    ],

    // Salads and Raitas
    DESSERTS: [
      {
        type: String,
        trim: true,
      },
    ],
    // CURD_AND_RAITA: [{
    //   type: String,
    //   trim: true
    // }],

    // // Main Courses
    // MAIN_COURSE_GHAR_KA_SWAD: [{
    //   type: String,
    //   trim: true
    // }],
    // VEGETABLES: [{
    //   type: String,
    //   trim: true
    // }],
    // MAIN_COURSE_PANEER: [{
    //   type: String,
    //   trim: true
    // }],
    // MAIN_COURSE_CHICKEN: [{
    //   type: String,
    //   trim: true
    // }],
    // MAIN_COURSE_MUTTON: [{
    //   type: String,
    //   trim: true
    // }],
    // MAIN_COURSE_FISH_WITH_BONE: [{
    //   type: String,
    //   trim: true
    // }],

    // // Rice and Breads
    // RICE: [{
    //   type: String,
    //   trim: true
    // }],
    // INDIAN_BREADS: [{
    //   type: String,
    //   trim: true
    // }],

    // // Desserts
    // DESSERTS: [{
    //   type: String,
    //   trim: true
    // }],
    // ICE_CREAM: [{
    //   type: String,
    //   trim: true
    // }],

    // // Additional Items
    // ADDITIONAL: [{
    //   type: String,
    //   trim: true
    // }],

    // Reference to booking
    bookingRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      unique: true,
    },
    customerRef: { type: String, required: true, unique: true },

    //   count: {
    //   type: Number,
    //   default: 0
    // },

    // canCustomerEdit: {
    //   type: Boolean,
    //   default: true
    // }
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
