import express from 'express';
import {
  getAllWorkoutsController,
  getOneWorkoutController,
  createNewWorkoutController,
  updateOneWorkoutController,
  deleteOneWorkoutController,
} from '../../controllers/workoutController.js';

const router = express.Router();

router.get('/', getAllWorkoutsController);
router.get('/:workoutId', getOneWorkoutController);
router.post('/', createNewWorkoutController);
router.patch('/:workoutId', updateOneWorkoutController);
router.delete('/:workoutId', deleteOneWorkoutController);
export default router;
