/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PostsController from '#controllers/posts_controller'
import AuthController from '#controllers/auth_controller'
import UsersController from '#controllers/users_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').renderInertia('home', { name: 'John Doe' })

router.on('/about').renderInertia('about')

// router.resource('posts', PostsController)
router.get('/posts', [PostsController, 'index']).use(middleware.silent())
router.get('/posts/create', [PostsController, 'create']).use(middleware.auth({ guards: ['web']}))
router.post('/posts', [PostsController, 'store']).use(middleware.auth({ guards: ['web']}))
router.get('/posts/:id', [PostsController, 'show']).use(middleware.silent())
// router.get('/posts/:id/edit', [PostsController, 'edit'])
// router.put('/posts/:id', [PostsController, 'update'])
router.delete('/posts/:id', [PostsController, 'delete']).use(middleware.auth({ guards: ['web']}))

router.get('/register', [AuthController, 'register'])
router.post('/register', [AuthController, 'registerUser'])
router.get('/login', [AuthController, 'login'])
router.post('/login', [AuthController, 'logUser'])
router.post('/logout', [AuthController, 'logout'])

router.get('/profile', [UsersController, 'profile']).use(middleware.auth({ guards: ['web']}))