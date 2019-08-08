import slack from './src/slack'
//import kvStore from './src/kv-store'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
    await slack(request)
  } catch (error) {
    return new Response(error.message, { status: 500 })
  }

  return new Response('Hello1!', { status: 200 })
}
