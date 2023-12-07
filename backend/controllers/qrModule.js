const fs = require('fs')
const QRCode = require('qrcode');
const asyncHandler = require('express-async-handler');
const crypto = require("crypto")
const { getEventByIDInternal } = require('../controllers/eventModule')
const { getTicketByIdInternal } = require('../controllers/ticketModule')

/**
 * @dev This generates and returns a QR code as an SVG
 * @todo Put the correct text to encrypt
 */
const generateQR = asyncHandler(async (req, res) => {
  const ticketData = await getTicketByIdInternal(req.body.ticketId)
  console.log(ticketData)
  const eventData = await getEventByIDInternal("654b8f1c34ac73d48a0d7838")
  const stringToEncrypt = JSON.stringify({
    // ticketData,
    eventName: eventData.EventName ,
    id: ticketData._id,
    isValid: eventData.isActive
  });
  
  const encryptedText = encryptText(stringToEncrypt);

  const QRSVG = QRCode.toString(encryptedText.toString(), {
    errorCorrectionLevel: 'L',
    type: 'svg'
  }, function (err) {
    if (err) throw err;
  });

  res.status(200).json({ QRSVG, ticketData });
})

/**
 * @dev This returns to the Vendor if the ticket is valid or not
 */
const scanQR = asyncHandler(async (req, res) => {
  const encryptedText = req.body.ticket
  const ticketData = decryptText(encryptedText)
  res.status(200).json(ticketData)
})

/**
 * @dev Use this to encrypt data for the QR code
 * @todo Get the vendor Id passed though this function to get the vendor's specific key
 * @param {Str} plainText The text to be encrypted
 * @returns The encrypted text in a base64 string
 */
function encryptText(plainText) {
  const publicKey = fs.readFileSync('backend/controllers/public_key.pem', 'utf8'); // Change this key for the vendor
  const encryptedData = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  },
    Buffer.from(plainText)
  );

  return encryptedData.toString('base64'); // Return as base64-encoded string
}

/**
 * @dev This decrypts the encrypted text
 */
function decryptText(encryptedText) {
  const privateKey = fs.readFileSync('backend/controllers/private_key.pem', 'utf8');
  const decryptedData = crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256'
  },
    Buffer.from(encryptedText, 'base64')
  );

  return decryptedData.toString();
}

module.exports = {
  generateQR,
  scanQR
}