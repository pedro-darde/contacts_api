import {Router} from 'express'
import ContactsController from './controllers/contacts-controller'
import UsersController from './controllers/user-controller'
const router = Router()

router.post('/contacts/create', ContactsController.add)
router.post('/contacts/edit/:id', ContactsController.edit)
router.get('/contacts/getAll', ContactsController.getAll)

router.post('/users/create', UsersController.add)
export default router
