const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema(
  {
    VendorName: {
      type: String,
      required: true,
    },
    VendorID: {
      type: String,
      required: true,
    },
    VendorDescription: {
      type: String,
      required: true,
    },
    IsActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Vendor', vendorSchema);
