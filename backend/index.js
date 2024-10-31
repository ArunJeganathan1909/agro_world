const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'agro_world',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Multer setup for image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to create a new user with an image
app.post('/users', upload.single('profile_image'), (req, res) => {
  const { name, phone_number, nic } = req.body;
  const profile_image = req.file ? req.file.buffer : null; // Convert image to binary

  db.query(
    'INSERT INTO users (name, phone_number, nic, profile_image) VALUES (?, ?, ?, ?)',
    [name, phone_number, nic, profile_image],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send({ message: 'User added successfully', userId: result.insertId });
    }
  );
});

// Route to retrieve user details (including image)
app.get('/users', (req, res) => {
  db.query('SELECT id, name, phone_number, nic, profile_image FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results.map(user => ({
      ...user,
      profile_image: user.profile_image ? user.profile_image.toString('base64') : null
    })));
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
