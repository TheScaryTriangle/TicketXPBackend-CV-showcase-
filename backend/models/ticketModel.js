const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    EventName: {
      type: String,
      required: true,
    },
    EventID: {
      type: String,
      required: true,
    },
    EventDetails: {
      type: String,
      required: true,
    },
    VendorID: {
      type: String,
      required: true,
    },
    IsActive: {
      type: Boolean,
      default: true,
    },
    EndOfSale: {
      type: Date,
      required: true,
    },
    EventDate: {
      type: Date,
      required: true,
    },
    TicketPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
