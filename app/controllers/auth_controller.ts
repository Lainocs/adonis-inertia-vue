import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {

  public async register({ inertia }: HttpContext) {
    return inertia.render('Auth/Register')
  }

  public async login({ inertia }: HttpContext) {
    return inertia.render('Auth/Login')
  }

  public async registerUser({ request, inertia }: HttpContext) {
    const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

    await User.create({ fullName, email, password })

    return inertia.location('/login')
  }

  public async logUser({ request, inertia, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return inertia.location('/posts')
  }

  public async logout({ inertia, auth }: HttpContext) {
    await auth.use('web').logout()

    return inertia.location('/login')
  }
}