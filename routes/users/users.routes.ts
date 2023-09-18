import { Router } from "express";
import { usersControllers as controllers } from "../../controllers";
import middlewares from "./users.middlewares";

const router = Router();

router.get("/", middlewares.getAll, controllers.getAll);

router.get("/:id", middlewares.getById, controllers.getById);

router.post("/", middlewares.createUser, controllers.createUser);

router.put("/:id", middlewares.updateUser, controllers.updateUser);

router.delete("/:id", middlewares.deleteUser, controllers.deleteUser);

export default router;
