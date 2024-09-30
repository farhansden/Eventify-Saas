const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); // We'll create this file later
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes); // Use the user routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
