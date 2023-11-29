const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    TicketId: {
      type: String,
      required: true,
    },
    EventId: {
      type: String,
      required: true,
    },
    EventName:{
      type:String,
    },
    VendorId: {
      type: String,
      // required: true,
    },
    IsValid: {
      type: Boolean,
      // required: true,
    },
    IsActive: {
      type: Boolean, 
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);
