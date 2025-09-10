const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    number: { type: String, trim: true },
    whatsapp: { type: String, trim: true },
    pax: { type: Number },
    startDate: { type: Date },

    ratePlan: { type: String },
    advance: { type: Number, default: 0 },
    gst: { type: Number, default: 0 }, // GST amount
    total: { type: Number },
    balance: { type: Number },
    ratePerPax: { type: Number }, // Rate per person
    hall: {
      type: String,
      enum: ["Nirvana", "Mandala", "Conference"],
      default: "Nirvana",
    },
    time: { type: String, trim: true }, // Time of the bookin
    discount: { type: Number, default: 0 }, // Discount amount
    isConfirmed: { type: Boolean, default: false },
    isEnquiry: { type: Boolean, default: false },
    isTentative: { type: Boolean, default: false },

    statusHistory: [
      {
        status: String,
        changedAt: Date,
      },
    ],
    foodType: {
      type: String,
      enum: ["Veg", "Non-Veg", "Both"],
      default: "Veg",
    },
    bookingStatus: {
      type: String,
      enum: ["Tentative", "Confirmed", "Enquiry"],
      default: "Tentative",
    },
    notes: { type: String, trim: true },

    customerRef: { type: String, unique: true },

    status: { type: Boolean, default: true }, // Whether the booking is confirmed or not
    staffEditCount: { type: Number, default: 0 },
    customerEditCount: { type: Number, default: 0 },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
