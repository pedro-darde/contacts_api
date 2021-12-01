import {Router} from 'express'
import ContactsController from './controllers/contacts-controller'
import UsersController from './controllers/user-controller'
const router = Router()

router.post('/contact', ContactsController.add)
router.patch('/contact/:id', ContactsController.edit)
router.get('/contacts', ContactsController.getAll)

router.post('/users', UsersController.add)
export default router
