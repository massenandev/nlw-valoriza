import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUsersController } from './controllers/ListUsersController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuth } from './middlewares/ensureAuth'


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUsersSendComplimentsController = new ListUserSendComplimentsController()
const listUsersReceiveComplimentsController  = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()


router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', ensureAuth, createComplimentController.handle)

router.get('/users/compliments/send', ensureAuth, listUsersSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuth, listUsersReceiveComplimentsController.handle)

router.get('/tags', ensureAuth, listTagsController.handle)
router.get('/users', ensureAuth, listUsersController.handle)

export { router }