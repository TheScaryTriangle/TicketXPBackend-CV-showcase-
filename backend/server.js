const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://dee0-37-203-152-77.ngrok-free.app' // This is NGROK
  ]
};

app.use(cors(corsOptions));

app.use('/api/vendorModule', require('./routes/vendorRoutes'));
app.use('/api/eventRoutes', require('./routes/eventRoutes'));
app.use('/api/ticketRoute', require('./routes/ticketRoute'));
app.use('/api/qrModule', require('./routes/qrRoute'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
