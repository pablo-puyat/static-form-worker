import slack from './src/notifiers/slack'
import formatData from './src/utils/format-data'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
    const message = await formatData(request.body)
    await slack(message)
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }

  return new Response('ok', { status: 200 })
}
