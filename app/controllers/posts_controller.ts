import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  public async index({ inertia, auth }: HttpContext) {

    const posts = await Post.all()

    return inertia.render('Posts/Index', { posts, user: auth.user })
  }

  public async create({ inertia }: HttpContext) {
    return inertia.render('Posts/Create')
  }

  public async store({ inertia, request, auth }: HttpContext) {
    const { title, content } = request.only(['title', 'content'])

    await Post.create({ title, content, userId: auth.user!.id })

    return inertia.location('/posts')
  }

  public async show({ inertia, params, auth }: HttpContext) {
    const post = await Post.find(params.id)

    return inertia.render('Posts/Show', { post, user: auth.user })
  }

  public async delete({ inertia, params, auth }: HttpContext) {
    const post = await Post.find(params.id)

    if (post?.userId !== auth.user!.id) {
      return inertia.location('/posts')
    }

    await post?.delete()

    return inertia.location('/posts')
  }
}