import { Router } from "express";
import ContactsController from "./controllers/contacts-controller";
import UsersController from "./controllers/user-controller";
import LoginController from "./controllers/login-controller";
const router = Router();

router.post("/contact", ContactsController.add);
router.patch("/contact/:id", ContactsController.edit);
router.get("/contacts", ContactsController.getAll);
router.get("/contact/:id", ContactsController.getOne);
router.delete("/contact/:id", ContactsController.remove);
router.post("/user", UsersController.add);

router.post("/login", LoginController.login);
export default router;
