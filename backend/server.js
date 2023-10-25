const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define your CORS options correctly
const corsOptions = {
  origin: 'http://localhost:3000', // Remove the trailing slash
};

// Apply the CORS middleware with the specified options
app.use(cors(corsOptions));

app.use('/api/vendorModule', require('./routes/vendorRoutes'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
