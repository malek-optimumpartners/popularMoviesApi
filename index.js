import express from 'express';
import path from 'path';
import moviesRoutes from './routes/moviesRoutes.js';

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(path.resolve(), 'public')));

// Movies API route
app.use('/movies', moviesRoutes);

// Default route for serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
