import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (_, res) => {
  res.send('Mission Management API is running');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
