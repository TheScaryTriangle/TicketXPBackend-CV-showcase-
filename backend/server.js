const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const port = 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/vendorModule', require('./routes/vendorRoutes'))
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});