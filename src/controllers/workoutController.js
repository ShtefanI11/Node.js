import {
  createNewWorkoutService,
  deleteOneWorkoutService,
  getAllWorkoutsService,
  getOneWorkoutService,
  updateOneWorkoutService,
} from '../services/workoutService.js';

const getAllWorkoutsController = (req, res) => {
  const allWorkouts = getAllWorkoutsService();
  res.send({ status: 'OK', data: allWorkouts });
};
const getOneWorkoutController = (req, res) => {
  const workout = getOneWorkoutService();
  res.send('Get an existing workout');
};
const createNewWorkoutController = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkoutReq = createNewWorkoutService(newWorkout);
  res.status(201).send({
    status: 'OK',
    data: createdWorkoutReq,
  });
};
const updateOneWorkoutController = (req, res) => {
  const updatedWorkout = updateOneWorkoutService();
  res.send('Update an existing workout');
};
const deleteOneWorkoutController = (req, res) => {
  deleteOneWorkoutService();
  res.send('Delete an existing workout');
};
export {
  getAllWorkoutsController,
  getOneWorkoutController,
  createNewWorkoutController,
  updateOneWorkoutController,
  deleteOneWorkoutController,
};
