import {Router} from   'express'
import {UserController} from './controllers/UserController'
import {SurveysController} from './controllers/SurveysController'

const router = Router();

const surveysController = new SurveysController();
const userController = new UserController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);


//24 min

export {router};
