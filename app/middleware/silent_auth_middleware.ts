import type { HttpContext } from '@adonisjs/core/http'
/**
 * Silent auth middleware can be used as a global middleware to silent check
 * if the user is logged-in or not.
 *
 * The request continues as usual, even when the user is not logged-in.
 */
export default class SilentAuthMiddleware {
  /**
   * Handle request
   */
  public async handle({ auth }: HttpContext, next: () => Promise<void>) {
    await auth.check()
    await next()
  }
}