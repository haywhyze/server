const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const workout_route = require('./workouts/workoutsRoutes')

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api', workout_route)



server.get('/api', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Listening on Port ${port}`));

module.exports = server;
