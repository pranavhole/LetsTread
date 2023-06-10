const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 27017;

// Middleware for parsing JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const User = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  pincode: String,
  referralCode: String,
  gender: String,
  termsAndConditions: Boolean,
});

// Registration endpoint

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/register', async (req, res) => {
  console.log("port connected");
  try {
    const {
      username,
      password,
      rePassword,
      email,
      pincode,
      referralCode,
      gender,
      termsAndConditions,
    } = req.body;

    // Validate password match
    if (password !== rePassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      password,
      email,
      pincode,
      referralCode,
      gender,
      termsAndConditions,
    });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
