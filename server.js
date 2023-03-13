const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./db');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Add CORS headers middleware function
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/register', async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      // Hash the password before storing it in the database
      password: await bcrypt.hash(req.body.password, 10),
      email: req.body.email,
      carrier: req.body.carrier,
    };

    console.log(data);

    const db = await connectToDatabase();
    const result = await db.collection('users').insertOne(data);

    console.log(result);

    if (result.acknowledged === true) {
      res.status(200).json({ message: 'User registered successfully' });
    } else {
      res.status(500).send('Failed to register user');
    }
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Failed to register user');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
