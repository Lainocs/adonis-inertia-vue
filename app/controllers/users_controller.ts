import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async profile({ inertia, auth }: HttpContext) {

    await auth.user?.load('posts')
    return inertia.render('Users/Profile', { user: auth.user })
  }
}