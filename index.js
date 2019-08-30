const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const usersRoutes = require('./users/usersRoutes');
const exerciseRouter = require('./exercises/exercisesRoutes');
const exerciseSets = require('./workouts/exerciseSets/exerciseSetsRoutes');
const workoutRouter = require('./workouts/workoutsRoutes');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/auth', usersRoutes);
server.use('/workout_exercises', exerciseSets);
server.use('/exercises', exerciseRouter);
server.use('/workouts', workoutRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
// server.listen(port, console.log(`Listening on Port ${port}`));

/* 
  With respect to listen EADDRINUSE :::5000 error returned when testing
  The problem is this: once the execution of the first test ends, the server is still listening on the port 5000. So when we require('../index') again in the second test file, it errors out because is port is still in use by the previous test file’s process.
  One simple fix for this issue is wrapping our app.listen() in a condition to check if the environment is a test environment or not. In a test environment, when running the server through Supertest, we do not really need to have the app listen on a network port.
  For more read https://blog.campvanilla.com/jest-expressjs-and-the-eaddrinuse-error-bac39356c33a
*/
if (process.env.NODE_ENV !== 'test') {
  server.listen(port, console.log(`Listening on Port ${port}`));
}
module.exports = server;
