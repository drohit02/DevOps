import express from 'express';
import connectToDatabase from './helpers.mjs';

const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

// Connect to the database and start the server
try {
  await connectToDatabase();  // Using top-level await
  console.log("Connected to the database successfully.");
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
} catch (error) {
  console.error("Failed to connect to the database:", error);
}
