import express from 'express';
import ClassController from './controllers/ClassesControllers';

const routes = express.Router();

const classesControllers = new ClassController();

routes.post('/classes', classesControllers.create);

export default routes;