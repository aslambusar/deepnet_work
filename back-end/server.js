const express = require('express');
const app = express();
const port = process.env.PORT || 3015;
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Enable CORS
app.use(cors());

// MongoDB Connection String
const mongodb = process.env.url;
if (!mongodb) {
    console.error("Error: MongoDB connection URL is missing in .env file.");
    process.exit(1); // Exit if no connection URL is provided
}

// Middleware
app.use(express.json());

// Routes
// const route = require('./route');
// app.use('/api', route);
const menuRoute = require('./routes/menuRoutes');
const itemRoute = require('./routes/itemRoutes');
app.use('/api/items', itemRoute);
app.use('/api/menu', menuRoute);
app.use('/menu', require('./routes/menuRoutes.js'));
app.use('/items', require('./routes/itemRoutes.js'));

// MongoDB Connection
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((error) => {
        console.error("DB connection error:", error);
        process.exit(1);
    });

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});